import {useSelector} from 'react-redux';

export default function CounterDisplay(){
    const {count} = useSelector((state) => state.counter);
    // console.log("state => ",state);

    return <div>{count}</div>
}