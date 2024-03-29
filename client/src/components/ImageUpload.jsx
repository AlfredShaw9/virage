// & Imports
import axios from "axios"

// & Functions

export default function ImageUploadField({ formData, setFormData }){
  
  async function handleImageUpload(e){
    const preset = import.meta.env.VITE_UPLOAD_PRESET
    const file = e.target.files[0]
    const endpoint = import.meta.env.VITE_UPLOAD_URL
  

    // Create form
    const data = new FormData()
    data.append('file',file)
    data.append('upload_preset',preset)

    // formData to Cloudinary endpoint
    const { data: { secure_url } } = await axios.post(endpoint, data)
    setFormData({ ...formData, image: secure_url})
  }

  return (
    <>
      {formData.image ?
      <img src = {formData.image} alt="Image"/>
      :
      <input type='file' name='image' onChange={handleImageUpload} />
      }
    </>
  )
}