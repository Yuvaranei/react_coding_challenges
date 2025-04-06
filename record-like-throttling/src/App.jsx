import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecordLike from './LikeButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RecordLike/>
  )
}

export default App
