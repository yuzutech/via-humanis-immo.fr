export async function getProperties() {
  const res = await fetch('/data/pericles/properties.json', {})
  if (!res.ok) {
    throw new Error('Failed to fetch properties')
  }
  return res.json()
}

export async function getCategories() {
  const res = await fetch('/data/pericles/categories.json', {})
  if (!res.ok) {
    throw new Error('Failed to fetch categories')
  }
  return res.json()
}

export async function getRentalCities() {
  const res = await fetch('/data/pericles/rental_cities.json', {})
  if (!res.ok) {
    throw new Error('Failed to fetch rental cities')
  }
  return res.json()
}

export async function getSaleCities() {
  const res = await fetch('/data/pericles/sale_cities.json', {})
  if (!res.ok) {
    throw new Error('Failed to fetch sale cities')
  }
  return res.json()
}
