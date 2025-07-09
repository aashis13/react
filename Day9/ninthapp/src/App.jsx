import { useState } from "react";
import Demo from "./Demo.jsx";

function App() {
  const [num, setNum] = useState({ x: 0, y: 0 });
  function handleIncrementY() {
    // num.x = num.x + 1;
    // num.y = num.y + 1;
    // setNum(num);
    setNum({
      x: num.x + 1,
      y: num.y + 1,
    });
    console.log(num);
  }
  function handleDecrementY() {
    // num.x = num.x + 1;
    // num.y = num.y + 1;
    // setNum(num);
    setNum({
      x: num.x - 1,
      y: num.y - 1,
    });
    console.log(num);
    
  }

  return (
    <>
      <label htmlFor="">X: {num.x}</label>
      <br />
      <label htmlFor="">Y: {num.y}</label>

      <div className="" style={{ padding: "1rem" }}>
        <button onClick={handleIncrementY} className="box">
          Increment x
        </button>
        <button onClick={handleDecrementY} className="box">
          Decrement x
        </button>
      </div>
      <Demo />
    </>
  );
}

export default App;
