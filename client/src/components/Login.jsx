// & Imports

// * Packages
import { useEffect, useState } from 'react'
import { Form, useActionData, Link, useNavigate } from 'react-router-dom'
import { setToken, setUser } from '../utils/helpers/common'
import { playHover, playPress, playBack } from '../utils/helpers/sounds'

// * Images

// & Default function
export default function Login(){
  const res = useActionData()
  const navigate = useNavigate()

  const [ username, setUsername ] = useState('')

  function handleChange(e){
    setUsername(e.target.value)
  }

  useEffect(() => {
    if (res?.status === 200){
      setToken(res.data.access)
      setUser(username)
      navigate('/')
    }
  }, [res, navigate])
  
  return (
    <>
      <div className='spacer'>
        <div className='formCont'>
          <Form method='POST'>
            <div className='dataFormFields'>

              <h1>Login</h1>
              <p>Sign in for access to your personal garage:</p>

              <div className='formField'>
                <label form='username'>Username:</label>
                <input type='username' id='username' name='username' placeholder='Username' onChange={handleChange} onMouseDown={playHover}/>
              </div>
              
              <div className='formField'>
                <label form='password'>Password:</label>
                <input type='password' id='password' name='password' placeholder='Password' onMouseDown={playHover}/>
              </div>

            </div>

            <div className='buttonCont'>
              <a>
                <button type='submit' onMouseDown={playPress} onMouseEnter={playHover}>Login</button>
              </a>
              <Link to ='/register' onMouseDown={playPress} onMouseEnter={playHover}>
                <button>Go to Register</button>
              </Link> 
              {/* {res && <p>{res.data.message}</p>} */}
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}