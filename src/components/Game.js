import React from "react";
import { useState } from "react";
import Moles from "./Moles";
// import Score  from "./Score";

function Game() {
  const [score, setScore] = useState(0);

  function moleHit() {
    setScore((score) => score + 100);
  }
  return (
    <div>
      <div className="scoreCount">
        <span>{score}</span>
      </div>
      <div className="moleCards">
        {Array(6).fill(<Moles moleHit={moleHit} />)}
      </div>
    </div>
  );
}
export default Game;
