import { /*React,*/ useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0); // Initialize state

  function yoo() {
    setCount(count + 1);
    console.log(yoo);
    setCount(count + 1);
    console.log(yoo);
    setCount(count + 1);
    console.log(yoo);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }
  return (
    <div className="box">
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>🔁Reset</button>
    </div>
  );
}

export default Counter;
