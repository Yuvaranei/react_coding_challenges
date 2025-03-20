import { useState } from 'react';
import './index.scss';

export default function Star(){
    let starEle = [];
    const [uptoStar, updateUptoStar] = useState(-1);

    const onClick = (e) => {
        let starClicked = Number(e.target.id);
        updateUptoStar(starClicked);
    }

    for(let i=0;i<5;i++){
        let starClass = "";
        if(i <= uptoStar){
            starClass = "markYellow"
        }
        starEle.push(<span 
            id={i} 
            key={i} 
            onClick={onClick} 
            className={`star ${starClass}`}
            >
                &#9733;
            </span>
        )
    }
    return (
        <>
            {starEle}
        </>
    )
}