import { useRef } from "react";
import { useState, useCallback } from "react";

function AutoSuggestion(){
    const [inputVal, setInputVal] = useState('');

    const apiCall = (keyword) => {
        console.log("data fetch call", keyword)
    }

    const debounce = (func, delay) => {
        let timer;

        return function(keyword){
            clearTimeout(timer);
            timer = setTimeout(() => func(keyword), delay);
        }
    }

    const debounceSearch = useCallback(debounce(apiCall, 1000), []);

    const onInputChange = (e) => {
        const {value} = e.target;
        setInputVal(value);
        debounceSearch(value)
    }
    return (
        <div>
            <input type="text" value={inputVal} onChange={onInputChange}/>
        </div>
    )
}

export default AutoSuggestion;