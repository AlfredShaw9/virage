// & Imports
// * Packages
import { useLoaderData, Link } from 'react-router-dom'

// * Images
import placeholder from '../assets/car_placeholder.png'

// & Default function
export default function IdentifyIndex(){
  
  const allSpotted = useLoaderData()
  
  return (
    <>
      <div className='spacer'>   
        <h1>Identify Index</h1>
        <section>
          { allSpotted?.length > 0
          ?
          allSpotted.map(cartoid => {
            const { id, image } = cartoid
            return (
              <Link
              key = {id}
              as = {Link}
              to = {`/spotted/${id}`}
              >
                <div>
                  <img src={placeholder}/>
                </div>
              </Link>
            )
          })
          :
          <p>No cars to display</p>
          }
        </section>
      </div>
    </>
  )
}