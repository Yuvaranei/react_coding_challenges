import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './components/ProgressBar'
import { useEffect } from 'react'

function App() {
  const [progress, setProgress] = useState(0);

  const timer = useRef();

  useEffect(() =>{
    timer.current = setInterval(() => setProgress((prevProgress) => {
      if(prevProgress >= 100){
        clearInterval(timer.current);
        return 100;
      }
      return prevProgress+1;
    }), 100);

    return ()=>{
      clearInterval(timer.current);
    }
  }, [])

  return (
    <>
      <input type="text" onChange={(e) => setProgress(e.target.value)} value={progress}/>
      {/* <ProgressBar percent={progress}/> */}

      <ProgressBar percent={progress}/>
    </>
    
  )
}

export default App
