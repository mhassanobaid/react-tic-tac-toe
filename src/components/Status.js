export default function Status({ winner, xIsNext, isDraw }) {
  let message;
  if (winner) {
    message = `Winner: ${winner}`;
  } else if (isDraw) {
    message = "Draw! No winner.";
  } else {
    message = "Next player: " + (xIsNext ? "X" : "O");
  }
  return <div className="status">{message}</div>;
}
