// & Imports

// & Functions

const tokenName = 'VIRAGE-TOKEN'
const username = 'USERNAME'

export async function formToObj(request) {
  const formData = await request.formData()
  return Object.fromEntries(formData.entries())
}

export function setToken(token){
  localStorage.setItem(tokenName, token)
}

export function getToken(){
  return localStorage.getItem(tokenName)
}

export function removeToken(){
  localStorage.removeItem(tokenName)
}


export function setUser(user){
  localStorage.setItem(username, user)
}

export function getUser(){
  return localStorage.getItem(username)
}

export function removeUser(){
  localStorage.removeItem(username)
}