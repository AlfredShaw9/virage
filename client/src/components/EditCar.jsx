// & Import
// * Packages
import { useState } from 'react'
import { useActionData, useLoaderData, useNavigate } from 'react-router-dom'
import ImageUploadField from './ImageUpload'
import { editCar } from '../utils/actions/car'

// * Images

// & Default function
export default function EditCar(){
  // const res = useActionData()
  const car = useLoaderData()
  const navigate = useNavigate()

  // & State
  const [ formData, setFormData ] = useState({
    make: car.make,
    model: car.model,
    year: car.year,
    bodystyle: car.bodystyle,
    engine: car.engine,
    power: car.power,
    layout: car.layout,
    weight: car.weight,
    description: car.description,
    image: car.ImageUploadField
  })

  // & Functions
  function handleChange(e){
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e){
    try {
      e.preventDefault()
      const response = await editCar(formData, car.id)
      if (response?.status === 200) {
        navigate(`/garages/cars/${car.id}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
  <>
    <div className='spacer'>
      <div>
        <form className='dataCont' onSubmit={handleSubmit}>
          <div className='dataFormFields'>

            <p className="instructionMsg">Fields with * are required.</p>

            <label form='make'>Make:</label>
            <input type="text" name="make" placeholder='Make' onChange={handleChange} value={formData.make}/>

            <label form='model'>Model:</label>
            <input type="text" name="model" placeholder='Model' onChange={handleChange} value={formData.model}/>

            <label form='year'>Year:</label>
            <input type="number" name="year" placeholder='Year' onChange={handleChange} value={formData.year}/>

            <label form='bodystyle'>Bodystyle:</label>
            <select name="bodystyle" id="bodystyle" onChange={handleChange} value={formData.bodystyle}>
              <option value="Hatchback">Hatchback</option>
              <option value="Estate">Estate</option>
              <option value="Saloon">Saloon</option>
              <option value="Coupe">Coupe</option>
              <option value="Convertible">Convertible</option>
              <option value="SUV">SUV</option>
              <option value="Truck">Truck</option>
              <option value="Crossover">Crossover</option>
            </select>

            <label form='engine'>Engine:</label>
            <input type="text" name="engine" placeholder='Engine'  onChange={handleChange}  value={formData.engine}/>

            <label form='power'>Power:</label>
            <input type="number" name="power" placeholder='Power' onChange={handleChange}  value={formData.power}/>

            <label form='layout'>Layout:</label>
            <input type="text" name="layout" placeholder='Layout'  onChange={handleChange}  value={formData.layout}/>

            <label form='weight'>Weight:</label>
            <input type="number" name="weight" placeholder='Weight'  onChange={handleChange}  value={formData.weight}/>

            <label form='description'>Description:</label>
              <textarea name="description" placeholder='Descripton'  onChange={handleChange}  value={formData.description}/>

            <label form='imageUpload'>Image Upload:</label>
            <ImageUploadField setFormData={setFormData} formData={formData} onChange={handleChange}/>

        </div>

        <div className='buttonsCont'>
          <button type="submit">Make changes to car</button>
        </div>

        </form>
      </div>
    </div>
  </>
  )
}