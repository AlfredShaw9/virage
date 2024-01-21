// & Imports

// * Packages
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// * Components
import App from './App.jsx'
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import GarageIndex from './components/GarageIndex.jsx'
import Garage from './components/Garage.jsx'
import CreateCar from './components/CreateCar.jsx'
import EditCar from './components/EditCar.jsx'
import Car from './components/Car.jsx'
import IdentifyIndex from './components/IdentifyIndex.jsx'
import Identify from './components/Identify.jsx'
import CreateIdentify from './components/CreateIdentify.jsx'

// * Actions/Loaders
import { loginUser, registerUser } from './utils/actions/auth.js'
import { getAllGarages, getGaragedCars, getCarData } from './utils/loaders/garage.js'
import { getAllSpotted, getSpotted } from './utils/loaders/spotted.js'
import { createCar, editCar, deleteCar } from './utils/actions/car.js'
import { createIdentify, createComment } from './utils/actions/spotted.js'

// * Styling
import './styles/index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/register',
        element: <Register />,
        action: async ({ request }) => registerUser(request)
      },
      {
        path: '/login',
        element: <Login />,
        action: async ({ request }) => loginUser(request)
      },
      {
        path: '/garages',
        element: <GarageIndex />,
        loader: getAllGarages
      },
      {
        path: '/garages/:userId',
        element: <Garage />,
        loader: async ({ params }) => getGaragedCars(params.userId),
      },
      {
        path: '/garages/addCar',
        element: <CreateCar />,
        action: async ({ request }) => createCar(request)
      },
      {
        path: '/garages/cars/:carId',
        element: <Car />,
        loader: async ({ params }) => getCarData(params.carId),
      },
      {
        path: '/garages/cars/:carId/edit',
        element: <EditCar />,
        loader: async ({ params }) => getCarData(params.carId),
        action: async ({ request, params }) => editCar(request, params.carId)
      },
      {
        path: '/garages/cars/:carId/delete',
        action: async ({ params }) => deleteCar(params.carId)
      },
      {
        path: '/spotted',
        element: <IdentifyIndex />,
        loader: getAllSpotted
      },
      {
      path: '/spotted/addSpotted',
      element: <CreateIdentify />,
      action: async ({ request }) => createIdentify(request)
      },
      {
        path: '/spotted/:spottedId',
        element: <Identify />,
        loader: async ({ params }) => getSpotted(params.spottedId),
        action: async ({ request }) => createComment(request)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
