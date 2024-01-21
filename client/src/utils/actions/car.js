// & Imports
import axios from 'axios'
import { getToken } from '../helpers/common.js'
import { redirect } from 'react-router-dom'

// & Functions

export async function createCar(data) {
  return await axios.post('/api/cars/', data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export async function editCar(data, id) {
  return await axios.patch(`/api/cars/${id}/`, data, {
    validateStatus: () => true,
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
  })
}

export async function deleteCar(id) {
  await axios.delete(`/api/cars/${id}/`, {
    validateStatus: () => true,
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
  })
  return redirect('/garages')
}