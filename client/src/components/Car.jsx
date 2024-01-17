// & Imports
// * Packages
import { useLoaderData, Link } from 'react-router-dom'
import { getUser } from '../utils/helpers/common'

// * Images

// & Default function
export default function Car(){

  const car = useLoaderData()
  const { id, make, model, year, image, bodystyle, engine, power, layout, weight, description, owner } = car

  return (
    <>
      <div className='spacer'>
        <div>

          <h1>Car</h1>

          {getUser() === owner.username &&
          <Link as={Link} to={`/garages/cars/${id}/edit`}>
            <div>
              <p>Edit car</p>
            </div>
          </Link>
          }

          <section>
            <img src={image}/>
          </section>

          <section>
            <p>{description}</p>
          </section>

          <section>
            <p>{make}</p>
            <p>{model}</p>
            <p>{year}</p>
            <p>{bodystyle}</p>
            <p>{engine}</p>
            <p>{power}</p>
            <p>{layout}</p>
            <p>{weight}</p>
          </section>

        </div>
      </div>
    </>
  )
}