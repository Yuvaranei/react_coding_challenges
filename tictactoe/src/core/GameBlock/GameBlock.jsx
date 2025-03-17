import './index.scss';

function GameBlock({nextPlayerCallback, playerId, col, row, gridData, anyWinner}){
    const gridOnclickHandler = () => {
        if(!anyWinner){
            nextPlayerCallback(row, col);
        }
       
    }
    return <div className="game-block" key={col}
    onClick={gridOnclickHandler}>{gridData[row][col]}</div>
}

export default GameBlock;