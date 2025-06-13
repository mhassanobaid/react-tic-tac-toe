export default function Square({ value, onSquareClick, isHighlighted }) {
  return (
    <button className={`square ${isHighlighted ? "highlight" : ""}`} onClick={onSquareClick}>
      {value}
    </button>
  );
}
