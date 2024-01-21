// & Imports
// * Packages
import { useLoaderData, Link } from 'react-router-dom'
import { playHover, playPress } from '../utils/helpers/sounds'

// * Images

// & Default function
export default function IdentifyIndex(){
  
  const allSpotted = useLoaderData()
  
  return (
    <>
      <div className='indexPageCont'>
        <div className='topText'>
          <h1>Car Spotter</h1>
          <div className='addCarToId'>
            <Link onMouseEnter={playHover} onMouseDown={playPress} as={Link} to={`/spotted/addSpotted`}>
              <p><span className='symbol'>+</span> Post car to identify</p>
            </Link>
          </div>
          <p>{ `Help identify cars other users have seen` }</p>
          <div className='seperator'></div>
        </div>
        <section className='indexCont'>
          { allSpotted?.length > 0
          ?
          allSpotted.map(cartoid => {
            const { id, image } = cartoid
            return (
              <div className='spottedInd' key = {id}>
                <Link onMouseEnter={playHover} onMouseDown={playPress}
                as = {Link}
                to = {`/spotted/${id}`}
                >
                  <img src={image}/>
                </Link>
              </div>
            )
          })
          :
          <p>No images to display</p>
          }
        </section>
      </div>
    </>
  )
}