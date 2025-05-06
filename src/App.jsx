import { Outlet } from 'react-router-dom'
import AppRouter from './router.jsx'
import { useEffect } from 'react'
// Dans App.jsx



function App() {




  return (
    <>

      <AppRouter />
      <Outlet />
    </>

  )
}

export default App

