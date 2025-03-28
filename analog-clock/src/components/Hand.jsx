import './index.scss';

export default function Hand({angle, className}){
    return (
        <div className={`${className} clock-hand`} style={{transform: `rotate(${angle}deg`}}></div>
    )
}