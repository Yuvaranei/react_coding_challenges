import GameBlock from "../GameBlock/GameBlock";
import './index.scss';

function GameGrid({boardSize, playerId, nextPlayerCallback, row, gridData, ...other}){

    const blocks = [];

    for(let i=0;i<boardSize;i++){
        blocks.push(<GameBlock key={i} 
            col={i} 
            row={row}
            nextPlayerCallback={nextPlayerCallback} 
            playerId={playerId}
            gridData={gridData}
            {...other}
            />)
    }

    return <div className="game-grid">{blocks}</div>;
}

export default GameGrid;