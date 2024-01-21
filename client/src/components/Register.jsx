// & Imports

// * Packages
import { useEffect } from 'react'
import { Form, useActionData, useNavigate, Link } from 'react-router-dom'
import { playHover, playPress, playBack } from '../utils/helpers/sounds'

// * Images

// & Default function
export default function Register(){
  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {
    if (res?.status === 201) {
      navigate('/login')
    }
  }, [res, navigate])
  
  return (
    <>
      <div className='spacer'>
        <div className='formCont'>
          <Form method="POST">
            <div className='dataFormFields'>
              <h1>Register</h1>
              <p>Register to be able to make your own garage:</p>
              <div className='formField'>
                <label form='username'>Username:</label>
                <input type="text" name="username" placeholder='Username' onMouseDown={playHover}/>
              </div>

              <div className='formField'>
                <label form='email'>Email:</label>
                <input type="email" name="email" placeholder='Email' onMouseDown={playHover}/>
              </div>

              <div className='formField'>
                <label form='password'>Password:</label>
                <input type="password" name="password" placeholder='Password' onMouseDown={playHover}/>
              </div>

              <div className='formField'>
                <label form='password confirm'>Password Confirmation:</label>
                <input type="password" name="password_confirmation" placeholder='Confirm password' onMouseDown={playHover}/>
              </div>
            </div>
            
            <div className='buttonCont'>
              <a>
                <button onMouseEnter={playHover} onMouseDown={playPress}>Register</button>
              </a>
              <Link to ='/login' onMouseEnter={playHover} onMouseDown={playPress}>
                <button type='submit'>Go to Login</button>
              </Link>
              {/* {res && <p>{res.data.message}</p>} */}
            </div>
          
          </Form>
        </div>
      </div>
    </>
  )
}