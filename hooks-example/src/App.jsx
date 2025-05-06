import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './useImperativeHandle'
import CounterReducer from './useReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <CounterReducer/>
  )
}

export default App
