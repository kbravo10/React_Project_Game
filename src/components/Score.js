import "../css/main.css";


function Score({ score }) {
  return (
    <div className="scoreboard">
      <h1>Score</h1>
      <span>{score}</span>
    </div>
  );
}

export default Score;