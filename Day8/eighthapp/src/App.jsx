import { useState } from "react";
import { Counter } from "./Counterpage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  const Reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>{count}</h1>
      <Counter func={Increment} name={"Increment"}></Counter>
      <Counter func={Decrement} name={"Decrement"}></Counter>
      <Counter func={Reset} name={"Reset"}></Counter>
    </>
  );
}

export default App;
