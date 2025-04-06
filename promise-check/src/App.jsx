import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function delayPromise(id){
    return new Promise((resolve) => {
        setTimeout(async () => {
            const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const data_json = await data.json();
            resolve(data_json);
        }, 2000)
    })
}


async function dataCall(){
    const result = [];
    for(let i=1;i<=3;i++){
        result.push(await delayPromise(i));
    }
    return result;
}

useEffect(() => {
  async function test(){
    const result  = await dataCall()
    console.log("result = ", result);
  }
 test();
 
}, []);


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
