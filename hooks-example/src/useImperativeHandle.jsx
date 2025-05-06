import { useImperativeHandle } from "react";
import { useRef } from "react";


function Child({ref, ...props}){
    const inputRef = useRef();
    useImperativeHandle(ref, () => {
        return {
                focus(){
                inputRef.current.focus();
            }
        }
    }, []);
    return <input type="text" ref={inputRef} placeholder="Enter name"/>
}

export default function Parent(){
    const focusRef = useRef();

    const handleRef = () => {
        focusRef.current.focus();
    }
    return (
        <>
            <Child ref={focusRef}/>
            <button onClick={handleRef}>Click Here</button>
        </>
    );
}