// & Import
// * Packages
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ImageUploadField from './ImageUpload'
import { createIdentify } from '../utils/actions/spotted'

// * Images

// & Default function
export default function CreateIdentify(){
  const navigate = useNavigate()

  // & State
  const [ formData, setFormData ] = useState({
    image: ''
  })

  // & Functions
  function handleChange(e){
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e){
    try {
      e.preventDefault()
      const response = await createIdentify(formData)
      if (response?.status === 201) {
        navigate('/spotted')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
  <>
    <div className='spacer'>
      <div className='formCont'>
        <form className='dataCont' onSubmit={handleSubmit}>
          <div className='dataFormFields'>

            <h1>Show us what you spotted</h1>
            <p>Upload an image below to post to the car spotter:</p>

            {/* <div className='formField'>
              <label form='description'>Description:</label>
              <textarea name="description" placeholder='Descripton'  onChange={handleChange}  value={formData.description}/>
            </div> */}
            <div className='formField'>
              <label form='imageUpload'>Image Upload:</label>
              <ImageUploadField setFormData={setFormData} formData={formData} onChange={handleChange}/>
            </div>

          </div>

          <div className='buttonCont'>
            <button type="submit">Help me identify!</button>
          </div>

        </form>
      </div>
    </div>
  </>
  )
}