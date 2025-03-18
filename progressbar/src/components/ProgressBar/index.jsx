import './index.scss';

function ProgressBar({percent}){
    // let progressEle = [];

    // for(let i=0;i<percent;i++){
    //     progressEle.push(<div key={i} className="progress-block progressed"></div>);
    // }

    // for(let i=percent;i<100;i++){
    //     progressEle.push(<div key={i} className="progress-block"></div>);
    // }

    return (
        <div className='progress-blocks' style={{width: `${percent}%`}}>
            {/* {progressEle} */}
        </div>
    );
}

export default ProgressBar;