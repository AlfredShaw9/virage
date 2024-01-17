// & Imports
import axios from 'axios'
import { formToObj } from '../helpers/common.js'

// & Functions

export async function registerUser(request) {
  const data = await formToObj(request)
  return await axios.post('/api/users/register/', data, {
    validateStatus: () => true,
  })
}

export async function loginUser(request) {
  const data = await formToObj(request)
  return await axios.post('/api/users/login/', data, {
    validateStatus: () => true,
  })
}