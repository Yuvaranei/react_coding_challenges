import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnalogClock from './components/AnalogClock'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [date, setDate] = useState(new Date());
  let timer = useRef();

  useEffect(() => {
    timer.current = setInterval(() => setDate(new Date()), 1000);

    return () => clearInterval(timer.current)
  })

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  console.log(`${hours} ${minutes} ${seconds}`)

  return (
    <AnalogClock hours={hours} minutes={minutes} seconds={seconds}/>
  )
}

export default App
