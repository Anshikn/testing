
import '../App.css'
import { useState } from "react";

function Scoreboard2() {

  let [score, setCount] = useState(0);

  return (
    <>
      <h1>SCOREBOARD 2</h1>
      <h2>{score}</h2>
      <button onClick={() => setCount(score + 10)}>Goal</button>

      <button onClick={() => setCount(score - 5)}>Yellow-Card</button>

      <button onClick={() => setCount(score = 0)}>GameOver</button>
    </>
  )
}

export default Scoreboard2;
