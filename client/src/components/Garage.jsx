// & Imports
// * Packages
import { useLoaderData, Link } from 'react-router-dom'
import { getUser } from '../utils/helpers/common'

// * Images

// & Default function
export default function Garage(){

  const cars = useLoaderData()
  const owner = cars[0].owner
  
  return (
    <>
    <div className='spacer'>
      <h1>{ `${owner.username}'s Garage` }</h1>
      {getUser() === owner.username &&
      <Link as={Link} to={`/garages/addCar`}>
        <div>
          <p>Add car</p>
        </div>
      </Link>
      }

      <section>
        { cars?.length > 0
        ?
        cars.map(car => {
          const { id, make, model, bodystyle } = car
          return (
            <Link
            key = {id}
            as = {Link}
            to = {`/garages/cars/${id}`}
            >
              <div>
                <p>{bodystyle} {make} {model}</p>
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