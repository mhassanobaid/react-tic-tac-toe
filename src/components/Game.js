import Board from "./Board";
import { useState } from "react";
export default function Game() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), lastMove: null }
  ]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares, moveIndex) {
    const nextHistory = [...history.slice(0, currentMove + 1), { squares: nextSquares, lastMove: moveIndex }]; // why did currentMove + 1 as const arr = ['a', 'b', 'c', 'd']; arr.slice(0, 2); returns ['a', 'b'] — index 2 is NOT included
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      const i = squares.lastMove;
      const row = Math.floor(i / 3);
      const col = (i % 3);
      description = `Go to move ${move} # (${row}, ${col})`;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        {move === currentMove ? (
          <span>You are at move #{move}</span>
        ) : (
          <button onClick={() => jumpTo(move)}>{description}</button>
        )}
      </li>
    );
  });
  if (!isAscending) {
    moves.reverse(); // Toggle list order
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares.squares} onPlay={(nextSquares, moveIndex) => handlePlay(nextSquares, moveIndex)} />
      </div>
      <div className="game-info">
        <button onClick={() => setIsAscending(!isAscending)}>
          Toggle Order ({isAscending ? "Ascending" : "Descending"})
        </button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
