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
      <h1>Hello</h1>
      <h2> I Am ... Ana Palma!</h2>
      <h3>Software Developer.</h3>

    </div>
  )
}

export default App
