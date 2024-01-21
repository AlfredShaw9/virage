// & Imports
// * Packages
import { useLoaderData, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { createComment } from '../utils/actions/spotted'
import { playHover, playPress, playBack } from '../utils/helpers/sounds'

// * Images


// & Default function
export default function Identify(){
  const Spotted = useLoaderData()
  const id = Spotted.id
  const owner = Spotted.owner.username


  // * State
  const [ refresh, setRefresh ] = useState(0)
  const [ comments, setComments ] = useState()
  const [ idedComment, setIdedComment ] = useState()
  const [ formData, setFormData ] = useState({
    text: ''
  })


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
  }, [id, refresh])

  useEffect(() =>{
    setIdedComment(Spotted.identified_comment)
  }, [Spotted.identified_comment])


  // * Functions
  function handleChange(e){
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e){
    try {
      e.preventDefault()
      const response = await createComment(formData, id)
      if (response?.status === 201) {
        e.target.text.value=''
        setRefresh(refresh+1)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='idPageCont'>
        <div className='sizeCont'>
          <div className='leftCont'>
            <div className='textCont'>
              <h1>Posted by {owner}</h1>
              <p>Post a comment to help identify</p>
            </div>
            <div className='imgCont'>
              <img src={Spotted.image}/>
              <div className='back spottedBack'>
                <Link onMouseEnter={playHover} onMouseDown={playBack} as={Link} to={`/spotted/`}>
                  <p><span className='symbol'>←</span> Back to Spotted Cars</p>
                </Link>
              </div>
            </div>
          </div>

          <div className='commentCont'>
            <div className='featured'>
              <p>Featured answer:</p>
              <p className='featuredComment'>{idedComment}</p>
            </div>
            <p>Comments:</p>
            <div className='comments'>
              { comments === undefined
                ?
                <p>Loading comments...</p>
                :
                comments.length > 0
                ?
                comments.map(comment => {
                  const { id, text, owner } = comment
                  return (
                  <div className='commentIndv' key = {id}>
                    <p className='user'>{owner.username}:</p>
                    <p>{text}</p>
                  </div>
                  )
                })
                :
                <p>No comments yet :(</p>
                }
              </div>
            <form className='commentSubmit' onSubmit={handleSubmit}>
              <textarea name="text" placeholder='Type comment here' onMouseDown={playHover} onChange={handleChange}/>
              <div className='buttonCont'>
                <button type='submit' onMouseDown={playPress}>Post comment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}