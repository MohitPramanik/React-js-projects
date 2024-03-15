import React, { useState } from "react";
import Board from "./Board";


export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]); // for implementing undo and redo options
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [count, setCount] = useState(0);

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }


  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setCount(nextMove)
}

const moves = history.map((squares, move) => {
    let description;
    if(move > 0) {
        description = 'Go to move #' + move;
    }
    else {
        description = 'Go to game start';

    }

return (
  // dynamic list which get shown after each button click so that players can undo or redo the game
    <li key={move} className="p-2">
        <button 
        className="bg-purple-600 w-full p-3 text-white font-bold rounded-xl m-1"
        onClick={() => jumpTo(move)}>{description}</button>
    </li>
)
})

  return (
    <div className="h-screen bg-blue-300"> 
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} setCount={setCount} count={count} />
      </div>
      <div className="game-info">
        <ol className="flex flex-col justify-center h-[300px] flex-wrap ">{moves}</ol>
      </div>
    </div>
  );
}