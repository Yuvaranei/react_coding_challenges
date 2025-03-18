import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react"

export default function Timer(){
    const [timerCount, setTimerCount] = useState(0);
    const [startTimer, setStartTimer] = useState(false);
    const [pause, updatePause] = useState(false);
    const timer = useRef();

    useEffect(() => {

        if(pause){
            clearInterval(timer.current);
        }
        else if(startTimer){
            timer.current = setInterval(() => (
                setTimerCount((prevTimerCount) => {
                    if(prevTimerCount <= 0){
                        clearInterval(timer.current);
                        return 0;
                    }
                    return prevTimerCount-1;
                })
            ), 1000)
        }
        
        if(!startTimer && !pause){
            clearInterval(timer.current);
            setTimerCount(0);
        }
        

        return () => {
            clearInterval(timer.current);
        }
    }, [startTimer, pause]);

    const hours = Math.floor(timerCount/(60*60)).toString().padStart(2, '0');
    const minutes = Math.floor((timerCount%(60*60))/60).toString().padStart(2, '0');
    const seconds = Math.floor((timerCount%(60*60))%60).toString().padStart(2, '0');
    return (
        <>
            <input type="number" onChange={(e) => setTimerCount(e.target.value)} value={timerCount}/>
            <div>{hours}:{minutes}:{seconds}</div>
            <button onClick={() => setStartTimer(true)}>Start</button>
            <button onClick={() => updatePause(true)}>Pause</button>
            <button onClick={() => updatePause(false)}>Resume</button>
            <button onClick={() => setStartTimer(false)}>Reset</button>
        </>
    )
}