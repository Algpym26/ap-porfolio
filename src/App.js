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

<marquee width="60%" direction="right" height="100px">
    
      Hello!!   I am ..... Ana Palma  Software Developer!.
      </marquee>

      <Nav/>
      <Contactpage/>
    </div>
  )
}

export default App
