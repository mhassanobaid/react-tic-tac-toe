export default function Status({ winner, xIsNext }) {
  let message;
  if (winner) {
    message = `Winner: ${winner}`;
  } else {
    message = `Next player: ${xIsNext ? "X" : "O"}`;
  }
  return <div className="status">{message}</div>;
}
