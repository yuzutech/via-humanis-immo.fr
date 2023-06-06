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

export async function getCities() {
  const res = await fetch('/data/pericles/cities.json', {})
  if (!res.ok) {
    throw new Error('Failed to fetch cities')
  }
  return res.json()
}
