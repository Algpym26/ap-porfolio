import { useEffect } from 'react'
import Nav from './components/Nav'
import './App.css'
import Contactpage from './pages/contactpage'
function App() {
  useEffect(() => {
    const mainpage = document.querySelector('.mainpage')
    setTimeout(
      () => {
        mainpage.style.filter = 'grayscale(0)'
      },

      3000,
    )
  }, [])
  
  return (
    <div className="mainpage">

<marquee width="75%" direction="left" height="100px">
    
      <h2>Hello!!  
      I am ..... <em>Ana Palma!</em>         Software Developer!.</h2>
      </marquee>

      <Nav/>
      <Contactpage/>
    </div>
  )
}

export default App
