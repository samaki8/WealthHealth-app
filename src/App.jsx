import { Outlet } from 'react-router-dom'
import AppRouter from './router.jsx'
import { useEffect } from 'react'
// Dans App.jsx



function App() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = "/headingsmap.js"; // Assurez-vous que le chemin est correct
      script.async = true;
      document.body.appendChild(script);

      // Nettoyage du script lors du démontage
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);



  return (
    <>

      <AppRouter />
      <Outlet />
    </>

  )
}

export default App

