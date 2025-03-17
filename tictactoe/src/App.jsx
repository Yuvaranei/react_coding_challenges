import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicTacToe from './core'

function App() {
  return <TicTacToe boardSize={5}/>
}

export default App
