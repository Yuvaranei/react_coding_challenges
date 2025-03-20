import { useState } from "react";
import InputComponent from "./InputComponent";
import Message from "./Message";
import './index.scss';

export default function ThemeChange(){

    const modes = Object.freeze({
        'LIGHT': 'light',
        'DARK': 'dark'
    });

    const [mode, setMode] = useState(modes.DARK);
    const clickHandler = (e) => {
        setMode(e.target.value);
    }
    return (
        <div className={`app-container app-${mode}`}>
            <button value={modes.LIGHT} className={`button-${mode}`} onClick={clickHandler}>Light</button>
            <button value={modes.DARK} className={`button-${mode}`} onClick={clickHandler}>Dark</button>
            <InputComponent theme={mode}/>
            <Message theme={mode}/>
        </div>
    )
}