import { useReducer } from "react";

function reducerFunc(state, action){
    switch(action.type){
        case 'increment':  return {count: state.count + 1};
        case 'decrement':  return {count: state.count - 1};;
        default: return state;
    }
}


export default function CounterReducer({}){
    const [state, dispatch] = useReducer(reducerFunc, {count: 0});

    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({type: "increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
        </div>
    )
}