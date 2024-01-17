// & Imports
// * Packages
// import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { removeToken, removeUser, getToken } from '../utils/helpers/common'
import { useNavigate } from "react-router-dom"
import { playHover, playPress, playBack } from '../utils/helpers/sounds'

// * Styling

// * Images
import logo from '../assets/car_placeholder.png'

//  & Default function
export default function Header(){

  const navigate = useNavigate()

  function handleClick() {
    removeToken()
    removeUser()
    navigate('/')
  }

  return(
    <>
      <header>
        <div className='titleHeader'>Virage</div>
        <nav>
        <Link to ='/' onMouseEnter={playHover} onMouseDown={playBack}><p>Home</p></Link>
        <Link to ='/garages' onMouseEnter={playHover} onMouseDown={playPress}><p>Garages</p></Link>
        <Link to ='/spotted' onMouseEnter={playHover} onMouseDown={playPress}><p>Car Spotter</p></Link>
        {!getToken() && <Link to ='/login' onMouseEnter={playHover} onMouseDown={playPress}><p>Register/Login</p></Link>}
        {getToken() && <button onMouseEnter={playHover} onMouseDown={playBack} type='button' onClick={handleClick}>Logout</button>}
        </nav>
      </header>
    </>
  )
}