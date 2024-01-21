// & Imports
// * Packages
import { useLoaderData, Link, Form } from 'react-router-dom'
import { getUser } from '../utils/helpers/common'
import { playHover, playPress, playBack } from '../utils/helpers/sounds'

// * Images

// & Default function
export default function Car(){

  const car = useLoaderData()
  const { id, make, model, year, image, bodystyle, engine, power, layout, weight, description, owner } = car

  return (
    <>
      <div className='carBg'>
        <div className='carCont'>

          <div className='topCont'>
            <div className='sideMenu'>
              <h1>Showroom</h1>
            <div className='back'>
              <Link onMouseEnter={playHover} onMouseDown={playBack} as={Link} to={`/garages/${owner.id}`}>
                <p><span className='symbol'>←</span> Back to Garage</p>
              </Link>
            </div>
            
            {getUser() === owner.username &&
            <>
              <div className='editCar'>
                <Link onMouseEnter={playHover} onMouseDown={playPress} as={Link} to={`/garages/cars/${id}/edit`}>
                    <p>✎ Edit car</p>
                </Link>
              </div>
              <div className='deleteCar'>
                <Form onMouseEnter={playHover} onMouseDown={playPress}
                  method='post'
                  action='delete'
                  onSubmit={(e) => {
                    if (
                      !confirm(
                        'Are you sure you want to delete this car?',
                      )
                    ) {
                      e.preventDefault()
                    }
                  }}
                >
                  <button type='submit'>🗑 Delete car</button>
                </Form>
              </div>
            </>
            }
          </div>

          <section className='imageCont'>
            <img src={image}/>
          </section>
          </div>

          <div className='detailsCont'>
            <section className='descCont'>
            <div className='descHeader'>
                <p>Description</p>
              </div>
              <p className='desc'>{description}</p>
            </section>

            <section className='specsCont'>
              <div className='colHeader'>
                <p>Specs</p>
                <div className='carSpacerHead'></div>
              </div>

              <div className='specsColCont'>
                <div className='col'>
                  <div><p>Make</p><p>{make}</p></div>
                  <div className='carSpacer'></div>
                  <div><p>Model</p><p>{model}</p></div>
                  <div className='carSpacer'></div>
                  <div><p>Year</p><p>{year}</p></div>
                  <div className='carSpacer'></div>
                  <div><p>Body</p><p>{bodystyle}</p></div>
                </div>

                <div className='col'>
                  <div><p>Engine</p><p>{engine}</p></div>
                  <div className='carSpacer'></div>
                  <div><p>Power</p><p>{power} bhp</p></div>
                  <div className='carSpacer'></div>
                  <div><p>Layout</p><p>{layout}</p></div>
                  <div className='carSpacer'></div>
                  <div><p>Weight</p><p>{weight} kg</p></div>
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>
    </>
  )
}