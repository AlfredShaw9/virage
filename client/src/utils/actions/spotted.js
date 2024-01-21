// & Imports
import axios from 'axios'
import { getToken } from '../helpers/common.js'

// & Functions

export async function createIdentify(data) {
  return await axios.post('/api/carstoid/', data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export async function createComment(data, id) {
  return await axios.post(`/api/comments/cartoid/${id}/`, data, {
    validateStatus: () => true,
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
  })
}