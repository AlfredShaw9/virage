// & Imports
// * Packages
import { useLoaderData, Link } from 'react-router-dom'
import { getUser } from '../utils/helpers/common'
import { playHover, playPress, playBack } from '../utils/helpers/sounds'

// * Images


// & Default function
export default function GarageIndex(){

  const allGarages = useLoaderData()
  
  return (
    <>
      <div className='spacer'>
        <div className='topText'>
          <h1>Garages</h1>
          <div className='seperator'></div>
          <p>Something Here</p>
        </div>
        <section className='indexCont'>
          { allGarages?.length > 0
          ?
          allGarages.map(garage => {
            const { id, username } = garage
            return (
              <Link onMouseEnter={playHover} onMouseDown={playPress}
              key = {id}
              as = {Link}
              to = {`/garages/${id}`}
              >
                {username === getUser()
                ?
                <div className='garage'>
                  <div className='guIcon'/>
                  <p>{`${username}'s Garage (You)`}</p>
                </div>
                :
                <div className='garage'>
                  <div className='gIcon'/>
                  <p>{`${username}'s Garage`}</p>
                </div>
                }
              </Link>
            )
          })
          :
          <p>No garages to display</p>
          }
        </section>
      </div>
    </>
  )
}