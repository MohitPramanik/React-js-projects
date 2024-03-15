import "../App.css";

export default function Square({ value, onSquareClick }) {

	return (
    <>
      <button className="square bg-red-100" onClick={onSquareClick}>{value}</button>
    </>
  );
}
