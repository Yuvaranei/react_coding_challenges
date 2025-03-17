import {useState} from 'react';
import GameGrid from "./GameGrid/GameGrid";
import './index.scss';

function TicTacToe({boardSize}){
    const gameGrid = [];
    const players = ['X', 'O'];

    const [anyWinner, setWinner] = useState(false);

    const initialGridValue = Array.from({length: boardSize}, () => new Array(boardSize).fill(''));

    const [gridData, setGridData] = useState(initialGridValue);

    const [playerId, setPlayerId] = useState(0);

    const checkForWinner = (row, col,player) => {
        function checkRows(row){
            let count = 1;
            for(let j=0;j<boardSize;j++){
                if(gridData[row][j] == player) count++;
                else break;
            }
            return count;
        }

        function checkCols(col){
            let count = 1;
            for(let i=0;i<boardSize;i++){
                if(gridData[i][col] == player) count++;
                else break;
            }
            return count;
        }

        let rowCount = checkRows(row);
        let colCount = checkCols(col);

        return  rowCount == boardSize || colCount == boardSize
    }

   const resetGame = () => {
        setGridData(initialGridValue);
        setWinner(false);
        setPlayerId(0);
   }

    const nextPlayerCallback = (row, col) => {
        if(gridData[row][col] == ''){
            setGridData(prev => {
                if(prev[row][col] == '')
                    prev[row][col] = players[playerId];
                return prev;
            })
            const anyWinner = checkForWinner(row, col, players[playerId]);
            if(anyWinner){
                    setWinner(true);
            }
            setPlayerId((prevPlayer) => 1-prevPlayer);
        }
    }

    for(let i=0;i<boardSize;i++){
        gameGrid.push(<GameGrid 
                key={i}
                row={i}
                boardSize={boardSize} 
                nextPlayerCallback={nextPlayerCallback}
                playerId = {players[playerId]}
                gridData={gridData}
                anyWinner={anyWinner}
             />
        )
    }
    const infoMsg = anyWinner ? `${players[1-playerId]} won the game` : `Player ${players[playerId]} turn!`
    return (
        <div>
            <div>
                <span>{infoMsg}</span>
                <button className='reset-button' onClick={resetGame}>Reset</button>
            </div>
            {gameGrid}
        </div>
    )
}

export default TicTacToe;