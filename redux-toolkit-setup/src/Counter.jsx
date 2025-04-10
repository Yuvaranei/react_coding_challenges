import CounterDisplay from "./CounterDisplay";
import {useDispatch} from 'react-redux';
import { decrement, increment, reset } from "./CounterSlice";

export default function Counter(){
    const dispatch = useDispatch();

    return (
        <div>
            Counter Application
            <button onClick={() => dispatch(increment())}>+</button>
            <CounterDisplay/>
            <button  onClick={() => dispatch(decrement())}>-</button>
            <button  onClick={() => dispatch(reset())}>RESET</button>
        </div>
    )
}