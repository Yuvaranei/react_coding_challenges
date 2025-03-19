import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react"

export default function StopWatch(){
    const timer = useRef();
    const timerRef = useRef();

    const [timerStarted, updateTimer] = useState(false);
    // const [pause, setPause] = useState(false);
    const [reset, setReset] = useState(false);
    const [timerCount, updateTimerCount] = useState(0);

    useEffect(() => {

        if(reset){
            clearInterval(timer.current);
            updateTimerCount(0)
            updateTimer(false);
            setReset(false);
        }

        if(timerStarted){
            timer.current = setInterval(() => {
                updateTimerCount((prevCount) => prevCount+1);
            }, 1000);
        }
        
        if(!timerStarted){
            clearInterval(timer.current);
        }

        return () => {
            clearInterval(timer.current);
        }

    }, [timerStarted, reset]);

    useEffect(() => {
        timerRef.current = timerCount;
    }, [timerCount]);

    useEffect(() => {
        const storedData = localStorage.getItem("timerCount");
        if (storedData) {
            updateTimerCount(Number(storedData));
        }
      }, []);

   useEffect(() => {
    const unloadHandler = () => {
        localStorage.setItem("timerCount", timerRef.current);
    }

    window.addEventListener('beforeunload', unloadHandler);
    return () => {
        window.removeEventListener('beforeunload', unloadHandler);
    }
   }, []);

    const mins = Math.floor(timerCount/60).toString().padStart(2, 0);
    const secs = (timerCount%60).toString().padStart(2,0);

    const updatePauseResume = () => {
        updateTimer((prevState) => !prevState );
    }

    // const resetHandler = () => {

    // }

    return (
        <>
            <button onClick={() => updateTimer(true)}>Start/Stop</button>
            <button onClick={() => updatePauseResume()}>Pause/Resume</button>
            <button onClick={() => setReset(true)}>Reset</button>
            <div>{mins}:{secs}</div>
        </>
    )
}