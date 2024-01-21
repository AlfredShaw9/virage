// & Imports
// import axios from 'axios'
// import { getToken } from '../helpers/common.js'
// import { redirect } from "react-router-dom"

import { json } from "react-router-dom"

// & Functions

export async function getAllGarages() {
  const res = await fetch('/api/users/')
  return res.json()
}

export async function getGaragedCars(id) {
  const resOwner = await fetch(`/api/users/${id}/`)
  const resCars = await fetch(`/api/cars/garage/${id}/`)
  return json({
    owner: await resOwner.json(),
    cars: await resCars.json(),
  })
}

export async function getCarData(id) {
  const res = await fetch(`/api/cars/${id}/`)
  return res.json()
}