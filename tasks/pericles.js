import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import fs from 'node:fs/promises'
import { XMLParser } from 'fast-xml-parser'
import * as b from "next/dist/telemetry/ci-info.js";

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const baseDirectory = path.join(__dirname, '..', 'public', 'data', 'pericles')

export class Property {
  withRent(rent) {
    this.rent = rent
    return this
  }

  withAgencyFees(agencyFees) {
    this.agencyFees = agencyFees
    return this
  }

  withRentalExpenses(rentalExpenses) {
    this.rentalExpenses = rentalExpenses
    return this
  }

  withPostalCode(postalCode) {
    this.postalCode = postalCode
    if (postalCode.toString().length >= 2) {
      this.department = postalCode.toString().substring(0, 2)
    }
    return this
  }

  withCity(city) {
    this.city = city
    return this
  }

  withFloorArea(floorArea) {
    if (floorArea) {
      this.floorArea = parseFloat(parseFloat(floorArea).toFixed(2))
    }
    return this
  }

  withDescription(description) {
    this.description = description
    return this
  }

  withContactName(contactName) {
    this.contactName = contactName
    return this
  }

  withContactTel(contactTel) {
    this.contactTel = contactTel
    return this
  }

  withContactEmail(contactEmail) {
    this.contactEmail = contactEmail
    return this
  }

  withCategory(category) {
    this.category = category
    return this
  }

  withOffer(offer) {
    this.offer = offer
    return this
  }

  withSalesPrice(price) {
    this.salesPrice = parseInt(price)
    return this
  }

  withRooms(rooms) {
    this.rooms = rooms
    return this
  }

  withId(id) {
    this.id = id // n° ASP
    return this
  }

  withAddress(address) {
    this.address = address
    return this
  }

  withGES(ges) {
    if (ges) {
      this.ges = ges.toLocaleLowerCase()
    }
    return this
  }

  withEnergyConsumptionClass(ecc) {
    if (ecc) {
      this.ecc = ecc.toLocaleLowerCase()
    }
    return this
  }

  withImages(images) {
    this.images = images
    return this
  }

  get price() {
    return this.rent || this.salesPrice
  }

  get imagePrefix() {
    return `${this.id}-`
  }

  // noinspection JSUnusedGlobalSymbols
  toJSON() {
    return {
      ...this,
      imagePrefix: this.imagePrefix,
      price: this.price,
      images: this.images
    }
  }
}

export async function updateData() {
  const properties = await getProperties()
  await fs.writeFile(path.join(baseDirectory, 'properties.json'), JSON.stringify(properties), 'utf8')
  const categories = Array.from(new Set(properties.map((p) => p.category))).sort()
  await fs.writeFile(path.join(baseDirectory, 'categories.json'), JSON.stringify(categories), 'utf8')
  const rentalCities = Array.from(new Set(properties
      .filter(p => p.offer === 'rental')
      .map(p => JSON.stringify({
        department: p.department,
        name: p.city.toLowerCase()
      }))
    )
  ).map(v => JSON.parse(v)).sort((a, b) => {
    if (a.department === b.department) {
      return a.name - b.name
    } else {
      return a.department - b.department
    }
  })
  const saleCities = Array.from(new Set(properties
      .filter(p => p.offer === 'sale')
      .map(p => JSON.stringify({
        department: p.department,
        name: p.city.toLowerCase()
      }))
    )
  ).map(v => JSON.parse(v)).sort((a, b) => {
    if (a.department === b.department) {
      return a.name - b.name
    } else {
      return a.department - b.department
    }
  })
  await fs.writeFile(path.join(baseDirectory, 'rental_cities.json'), JSON.stringify(rentalCities), 'utf8')
  await fs.writeFile(path.join(baseDirectory, 'sale_cities.json'), JSON.stringify(saleCities), 'utf8')
}

/**
 * @return Promise<Property[]>
 */
async function getProperties() {
  return getPropertiesFromXml('export.xml')
}

/**
 * @param xmlFile
 * @return Promise<Property[]>
 */
async function getPropertiesFromXml(xmlFile) {
  const parser = new XMLParser()
  const dataDirectory = path.join(__dirname, '..', 'data')
  const imagesDir = path.join(baseDirectory, 'images')
  const xmlData = await fs.readFile(path.join(dataDirectory, xmlFile), {encoding: 'binary'})
  const data = parser.parse(xmlData)
  const properties = data['LISTEPA']['BIEN']
  const result = await Promise.all(properties.map(async (p) => {
    const property = new Property()
    const rent = p['LOCATION']
    if (rent) {
      const rentIncludingCharges = parseFloat((parseFloat(rent['LOYER']) + parseFloat(rent['PROVISION_SUR_CHARGES'])).toFixed(2))
      property.withRent(rentIncludingCharges)
      property.withOffer('rental')
    }
    const sale = p['VENTE']
    if (sale) {
      const price = parseFloat(parseFloat(sale['PRIX']).toFixed(2))
      property.withSalesPrice(price)
      property.withOffer('sale')
    }
    property.withAddress("")
    let category = 'appartement'
    if (p['PARKING']) {
      category = 'parking'
    } else if (p['DEMEURE']) {
      category = 'demeure'
    } else if (p['MAISON']) {
      category = 'maison'
    } else if (p['FOND_COMMERCE']) {
      category = 'fond de commerce'
    } else if (p['LOCAL_PROFESSIONNEL']) {
      category = 'local professionnel'
    } else if (p['TERRAIN']) {
      category = 'terrain'
    } else if (p['MARINA']) {
      category = 'marina'
    } else if (p['PROGRAMME_NEUF']) {
      category = 'programme neuf'
    } else if (p['IMMEUBLE']) {
      category = 'immeuble'
    } else if (p['GRANGE']) {
      category = 'grange'
    }
    property.withId(String(p['INFO_GENERALES']['AFF_ID']))
    property.withCategory(category)
    property.withCity(p['LOCALISATION']['VILLE'])
    property.withPostalCode(p['LOCALISATION']['CODE_POSTAL'])
    if (category === 'maison' || category === "appartement") {
      const detail = p['MAISON'] || p['APPARTEMENT']
      if (detail) {
        property.withEnergyConsumptionClass(detail['CONSOMMATIONENERGETIQUE'])
        property.withGES(detail['GAZEFFETDESERRE'])
        property.withFloorArea(detail['SURFACE_HABITABLE'])
        property.withRooms(detail['NBRE_PIECES'])
      } else {
        console.log('No detail found!', p)
      }
    }
    property.withDescription(p['COMMENTAIRES']['FR'])
    const agency = p['AGENCE']
    if (agency) {
      property.withContactTel(agency['AGENCE_TELEPHONE'])
      property.withContactName(agency['AGENCE_NOM'])
      property.withContactEmail(agency['AGENCE_MAIL'])
    }
    const images = p['IMAGES']
    const imageFileNames = []
    if (images) {
      const imageUrls = images['IMG']
      let index = 0
      for (const imageUrl of imageUrls) {
        if (imageUrl.startsWith('https://') || imageUrl.startsWith('http://')) {
          index += 1
          try {
            const r = await fetch(imageUrl)
            const fileName = `${property.id}-${index}.jpg`;
            const imagePath = path.join(imagesDir, fileName);
            await fs.writeFile(imagePath, Buffer.from(await r.arrayBuffer()))
            imageFileNames.push(fileName)
          } catch (err) {
            console.log(`Unable to get ${imageUrl}, ignoring...`, err)
          }
        }
      }
    }
    property.withImages(imageFileNames)
    return property
  }));
  return result
}
