import {fileURLToPath, URL} from 'node:url'
import path from 'node:path'
import fs from 'node:fs/promises'

import iconv from 'iconv-lite'
import sax from 'sax'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const baseDirectory = path.join(__dirname, '..', 'public', 'data', 'pericles')

function getImages(property, images) {
  const imagePrefix = property.imagePrefix
  const result = images.filter((image) => image.startsWith(imagePrefix)).sort()
  console.log(`Found ${result.length} images for property id ${property} (using ${imagePrefix} prefix).`)
  return result
}

export class Property {
  withRent(rent) {
    this.rent = parseInt(rent)
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
    if (postalCode.length >= 2) {
      this.department = postalCode.substring(0, 2)
    }
    return this
  }

  withCity(city) {
    this.city = city
    return this
  }

  withFloorArea(floorArea) {
    if (floorArea) {
      this.floorArea = parseFloat(floorArea.replace(',', '.'))
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

  withContactInfo(contactInfo) {
    this.contactInfo = contactInfo
    return this
  }

  withCategory(category) {
    if (category) {
      const categoryLowerCase = category.toLowerCase()
      if (categoryLowerCase.includes('appartement') || categoryLowerCase.includes('studio')) {
        this.category = 'appartement'
      } else if (categoryLowerCase.includes('maison') || categoryLowerCase.includes('pavillon')) {
        this.category = 'maison'
      } else {
        this.category = categoryLowerCase
      }
    }
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

  withCompanyCode(companyCode) {
    this.companyCode = companyCode
    return this
  }

  withSiteCode(siteCode) {
    this.siteCode = siteCode
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
    if (this.offer.toLocaleLowerCase() === 'rental') {
      return this.rent
    }
    return this.salesPrice
  }

  get imagePrefix() {
    return `${this.companyCode}-${this.siteCode}-${this.id}-`
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

const createStream = (resolve, _) => {
  let currentNode
  let currentProperty
  const properties = []
  const saxStream = sax.createStream(false, {})
  saxStream.on('error', e => {
    // unhandled errors will throw, since this is a proper node event emitter.
    console.error('An error occurred!', e)
    // clear the error
    this._parser.error = null
    this._parser.resume()
  })

  saxStream.on('end', _ => {
    resolve(properties)
  })

  saxStream.on('opentag', (node) => {
    currentNode = node
    if (node.name === 'BIEN') {
      currentProperty = new Property()
    }
  })

  saxStream.on('closetag', (tag) => {
    if (tag === 'BIEN') {
      properties.push(currentProperty)
    }
  })

  saxStream.on('cdata', (s) => {
    if (currentNode.name === 'DPE_ETIQ1') {
      currentProperty.withEnergyConsumptionClass(s)
    }
    if (currentNode.name === 'DPE_ETIQ2') {
      currentProperty.withGES(s)
    }
    if (currentNode.name === 'ADRESSE1_OFFRE') {
      currentProperty.withAddress(s)
    }
    if (currentNode.name === 'CODE_SOCIETE') {
      currentProperty.withCompanyCode(s)
    }
    if (currentNode.name === 'CODE_SITE') {
      currentProperty.withSiteCode(s)
    }
    if (currentNode.name === 'NO_ASP') {
      currentProperty.withId(s)
    }
    if (currentNode.name === 'LOYER') {
      currentProperty.withRent(s)
    }
    if (currentNode.name === 'PRIX') {
      currentProperty.withSalesPrice(s)
    }
    if (currentNode.name === 'NB_PIECES') {
      currentProperty.withRooms(s)
    }
    if (currentNode.name === 'HONORAIRES') {
      currentProperty.withAgencyFees(s)
    }
    if (currentNode.name === 'CHARGES') {
      currentProperty.withRentalExpenses(s)
    }
    if (currentNode.name === 'CP_OFFRE') {
      currentProperty.withPostalCode(s)
    }
    if (currentNode.name === 'VILLE_OFFRE') {
      currentProperty.withCity(s)
    }
    if (currentNode.name === 'SURF_HAB') {
      currentProperty.withFloorArea(s)
    }
    if (currentNode.name === 'TEXTE_FR') {
      currentProperty.withDescription(s)
    }
    if (currentNode.name === 'CONTACT') {
      currentProperty.withContactName(s)
    }
    if (currentNode.name === 'INFO_CONTACT') {
      currentProperty.withContactInfo(s)
    }
    if (currentNode.name === 'CATEGORIE') {
      currentProperty.withCategory(s)
    }
    if (currentNode.name === 'TYPE_OFFRE') {
      if (parseInt(s) >= 10) {
        currentProperty.withOffer('rental')
      } else {
        currentProperty.withOffer('sale')
      }
    }
  })
  return saxStream
}

export async function updateData() {
  const imagesDir = path.join(baseDirectory, 'images')
  let images = await fs.readdir(imagesDir)
  const properties = await getProperties()
  // remove extraneous images
  const imagePrefixes = properties.map((p) => p.imagePrefix)
  for (const image of images) {
    const found = imagePrefixes.find((imagePrefix) => image.startsWith(imagePrefix))
    if (!found) {
      await fs.unlink(path.join(imagesDir, image))
    }
  }
  images = await fs.readdir(imagesDir)
  console.log(`Found ${images.length} images associated with a property in ${imagesDir}`)
  const propertiesWithImages = properties.map((property) => {
    return property.withImages(getImages(property, images))
  })
  await fs.writeFile(path.join(baseDirectory, 'properties.json'), JSON.stringify(propertiesWithImages), 'utf8')
  const categories = Array.from(new Set(properties.map((p) => p.category))).sort()
  await fs.writeFile(path.join(baseDirectory, 'categories.json'), JSON.stringify(categories), 'utf8')
  const cities = Array.from(new Set(properties.map((p) => p.city.toLowerCase()))).sort()
  await fs.writeFile(path.join(baseDirectory, 'cities.json'), JSON.stringify(cities), 'utf8')
}

/**
 * @return Promise<Property[]>
 */
async function getProperties() {
  return Promise.all([
      getPropertiesFromXml('via-humanis-immo.xml'),
      getPropertiesFromXml('immogic.xml')
    ]
  ).then((result) => result.flat())
}

/**
 * @param xmlFile
 * @return Promise<Property[]>
 */
function getPropertiesFromXml(xmlFile) {
  const dataDirectory = path.join(__dirname, '..', 'data')
  return new Promise((resolve, reject) => {
    const saxStream = createStream((offers) => resolve(offers), (error) => reject(error))
    fs.open(path.join(dataDirectory, xmlFile))
      .then(fd => fd.createReadStream())
      .then(stream =>
        stream.on('error', (e) => {
          console.log('error:', e)
          reject(e)
        })
          .pipe(iconv.decodeStream('win1252'))
          .pipe(saxStream)
      )
  })
}

/*
function findProperty (properties, id) {
  const result = properties.filter(p => p.id === id)
  if (result.length >= 1) {
    return result[0]
  }
}

async function getProperty (id, companyCode, siteCode) {
  const properties = await getProperties()
  return findProperty(properties, id, companyCode, siteCode)
}

function filterProperties (properties, predicates) {
  return properties.filter((item) => {
    if (predicates.city && item.city !== predicates.city) {
      return false
    }
    if (predicates.maxPrice) {
      if (predicates.offer === 'location') {
        if (item.rent > predicates.maxPrice) {
          return false
        }
      } else if (predicates.offer === 'achat') {
        if (item.price > predicates.maxPrice) {
          return false
        }
      }
    }
    if (predicates.rooms && item.rooms < predicates.rooms) {
      return false
    }
    if (predicates.type && item.type !== predicates.type) {
      return false
    }
    if (predicates.offer === 'location') {
      if (item.offer !== 'rental') {
        return false
      }
    } else if (predicates.offer === 'achat') {
      if (item.offer !== 'sale') {
        return false
      }
    }
    return true
  })
}

function uniqTypes (properties) {
  return [...new Set(properties.map(o => o.type).sort())]
}

function uniqLocations (properties) {
  return properties
    .sort((a, b) => {
      if (!a.postalCode) {
        return -1
      }
      if (!b.postalCode) {
        return -1
      }
      return a.postalCode.localeCompare(b.postalCode)
    })
    .map(o => ({
      city: o.city,
      postalCode: o.postalCode,
      department: o.department
    }))
}

async function getImages (property) {
  return []
}

function _extractPredicatesFromRequest(req) {
  const predicates = {}
  predicates.city = req.query['ville']
  predicates.maxPrice = req.query['prix-max']
  predicates.rooms = req.query['pieces']
  predicates.type = req.query['type']
  predicates.offer = req.query['offre']
  return predicates
}*/
