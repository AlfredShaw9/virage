// & Imports

// & Functions

export async function getAllSpotted() {
  const res = await fetch('/api/carstoid/')
  return res.json()
}

export async function getSpotted(id) {
  const res = await fetch(`/api/carstoid/${id}/`)
  return res.json()
}