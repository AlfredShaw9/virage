// * Packages
import { Outlet } from 'react-router-dom'

// * Components
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      {
      <main>
        <Outlet />
      </main>
      }
    </>
  )
}

export default App