import { useRef } from "react";
import { useState } from "react"

export default function RecordLike(){
    let [count, setCount] = useState(0);


    let throttleRef = useRef();

    const throttle = function(apiFun, delay){
        console.log("throttleRef.current...", throttleRef.current);
        if(!throttleRef.current){
            apiFun();
            throttleRef.current = setTimeout(() => {
                throttleRef.current = null;
            }, delay);
        }
    }

    const apiFunction = () => {
        setCount((prevCount) => prevCount+1);
    }

    const onLikeHandler = () => {
        throttle(apiFunction, 2000);
    }

    return (
        <div>
            <div>Number of Likes: {count}</div>
            <div onClick={onLikeHandler} style={{fontSize: '30px'}}>👍🏻</div>
        </div>
    )
};