// & Imports
// * Packages
import { useLoaderData } from 'react-router-dom'
import { useEffect, useState } from 'react'

// * Images


// & Default function
export default function Identify(){
  
  const Spotted = useLoaderData()
  const id = Spotted.id

  // * States
  const [comments, setComments] = useState()
  const [idedComment, setIdedComment] = useState()

  // * Effects
  useEffect(() =>{
    async function getComments(id){
      try {
        const res = await fetch (`/api/comments/cartoid/${id}`)
        const data = await res.json()
        setComments(data)
      } catch (error) {
        console.log(error)
      }
    }
    getComments(id)
  }, [id])

  useEffect(() =>{
    setIdedComment(Spotted.identified_comment)
  }, [Spotted.identified_comment])

  return (
    <>
      <div className='spacer'>
        <h1>Identify</h1>
        <div>
          <img src={Spotted.image}/>
          <p>Image link (Dev only): {Spotted.image}</p>
        </div>
        <div>
          <p>Featured answer: {idedComment}</p>
        </div>
        <div>
        { comments?.length > 0
          ?
          comments.map(comment => {
            const { id, text } = comment
            return (
            <div key = {id}>
              <p>{text}</p>
            </div>
            )
          })
          :
          <p>No comments yet :C</p>
          }
        </div>
      </div>
    </>
  )
}