import { useEffect } from 'react'

import './App.css'
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


    </div>
  )
}

export default App
