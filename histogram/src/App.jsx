import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Histogram from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Histogram/>
  )
}

export default App
