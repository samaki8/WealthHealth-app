import { Outlet } from 'react-router-dom'
import AppRouter from './router.jsx'


function App() {


  return (
    <>

      <AppRouter />
      <Outlet />
    </>

  )
}

export default App

