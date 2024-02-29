import { useState } from "react";

function Score(){
    const [score, setScore] = useState(0)
    return(
        <div>
            <h1>Score</h1>
            <span>{score}</span>
        </div>

    )
}

export default Score;