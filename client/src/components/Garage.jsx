// & Imports
// * Packages
import { useLoaderData, Link } from 'react-router-dom'
import { getUser } from '../utils/helpers/common'
import { playHover, playPress, playBack } from '../utils/helpers/sounds'

// * Images
import Convertible from '../assets/cars/convertible.png'
import Coupe from '../assets/cars/coupe.png'
import Crossover from '../assets/cars/crossover.png'
import Estate from '../assets/cars/estate.png'
import Hatcback from '../assets/cars/hatchback.png'
import Saloon from '../assets/cars/saloon.png'
import SUV from '../assets/cars/suv.png'
import Truck from '../assets/cars/truck.png'

// & Default function
export default function Garage(){

  const data = useLoaderData()
  const owner = data.owner.username
  const cars = data.cars
  
  return (
    <div className='garageBg'>
      <div className='garageCont'>
        <div className='topSideText'>
          <h1>{ `${owner}'s Garage` }</h1>
          <p>{`${cars.length} cars in garage`}</p>
          <div className='seperatorCars'></div>
          <div className='back'>
            <Link onMouseEnter={playHover} onMouseDown={playBack} as={Link} to={`/garages/`}>
              <p><span className='symbol'>←</span> Back to Garages</p>
            </Link>
          </div>
          {getUser() === owner &&
          <div className='addCar'>
            <Link onMouseEnter={playHover} onMouseDown={playPress} as={Link} to={`/garages/addCar`}>
              <p><span className='symbol'>+</span> Add car</p>
            </Link>
          </div>
          }
        </div>

        <section className='carList'>
          <div className='carDetails carDetailsHeader'>
            <div className='modelCont'>
              Model
            </div>
            <div className='vertDivide'></div>
            <div className='yearCont'>
              Year
            </div>
            <div className='vertDivide'></div>
            <div className='makeCont'>
              Make
            </div>
            <div className='vertDivide'></div>
            <div className='powerCont'>
              Power
            </div>
            <div className='vertDivide'></div>
            <div className='dtCont'>
              Drivetrain
            </div>
          </div>
          <div className='scrollDiv'>
            { cars?.length > 0
            ?
              cars.map(car => {
                const { id, make, model, bodystyle, power, layout, year } = car
                return (
                  <Link onMouseEnter={playHover} onMouseDown={playPress}
                  key = {id}
                  as = {Link}
                  to = {`/garages/cars/${id}`}
                  >
                    <div className='carDetails hoverEffect'>
                      <div className='modelCont modelFormat'>
                        <div className='carIcon' style={
                        bodystyle==='Convertible' ? { backgroundImage: `url(${Convertible})` }
                        :
                        bodystyle==='Coupe' ? { backgroundImage: `url(${Coupe})` }
                        :
                        bodystyle==='Crossover' ? { backgroundImage: `url(${Crossover})` }
                        :
                        bodystyle==='Estate' ? { backgroundImage: `url(${Estate})` }
                        :
                        bodystyle==='Hatchback' ? { backgroundImage: `url(${Hatcback})` }
                        :
                        bodystyle==='Saloon' ? { backgroundImage: `url(${Saloon})` }
                        :
                        bodystyle==='SUV' ? { backgroundImage: `url(${SUV})` }
                        :
                        bodystyle==='Truck' ? { backgroundImage: `url(${Truck})` }
                        :
                        { backgroundImage: `url(cat)` }
                        }>
                        </div> {model}
                      </div>
                      <div className='vertDivide'></div>
                      <div className='yearCont'>
                        {year}
                      </div>
                      <div className='vertDivide'></div>
                      <div className='makeCont'>
                        {make}
                      </div>
                      <div className='vertDivide'></div>
                      <div className='powerCont'>
                        {power} bhp
                      </div>
                      <div className='vertDivide'></div>
                      <div className='dtCont'>
                        {layout}
                      </div>
                    </div>
                  </Link>
                )
              })
            :
            <p className='noDisp'>No cars in garage yet</p>
            }
          </div>
        </section>
      </div>
    </div>
  )
}