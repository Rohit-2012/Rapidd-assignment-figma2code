import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Heading from './components/heading/Heading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Heading/>
    </>
  )
}

export default App