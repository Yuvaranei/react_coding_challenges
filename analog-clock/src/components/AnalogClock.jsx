import Hand from './Hand';
import './index.scss';

export default function AnalogClock({hours, minutes, seconds}){
    return (
        <div className='clock-container'>
            <Hand className={'hours'} angle={Math.floor(hours/12) * 30}/>
            <Hand className={'minutes'} angle={minutes * 6}/>
            <Hand className={'seconds'} angle={seconds * 6}/>
        </div>
    )
}