import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AutoSuggestion from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AutoSuggestion/>
  )
}

export default App
