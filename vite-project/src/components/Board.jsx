import "../App.css";
import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay, count, setCount}) {



  // Function to handle the clicks on each box
  function handleClick(i) {
    // checking if square already filled or if one player won or if the game is finished as all boxes got filled
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    // Copy of original array which maintains data for board
    const nextSquares = squares.slice();

    // Flipping the value to 'X' and 'O'
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setCount(count + 1);
    onPlay(nextSquares);
    // console.log(count)

  }

  // Function to find the position where one player wins
    function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
  
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
        ) {
          return squares[a];
        }
      }
      return null;
    }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if(count <= 8) {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  } else {
    status = "Match Draw!"
  }


  return (
    <>
      <div className="m-auto w-fit pt-[50px]">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>

      <div className="status mt-[50px] text-center font-bold text-blue-300 bg-white w-screen text-[40px]">
        {status}
      </div>
    </>
  );
}
