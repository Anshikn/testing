
import '../App.css'
import { useEffect, useState } from "react";

function Scoreboard() {

  let [score, setCount] = useState(0); 0
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => console.log(data))
    console.log("score changed")
  }
    , [score]);



  return (
    <>
      <h1>SCOREBOARD 1</h1>
      <h2>{score}</h2>
      <button onClick={() => setCount(score + 10)}>Goal</button>

      <button onClick={() => setCount(score - 5)}>Yellow-Card</button>

      <button onClick={() => setCount(score = 0)}>GameOver</button>
    </>
  )
}

export default Scoreboard;
