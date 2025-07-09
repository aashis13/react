import { useEffect, useState } from "react";
import { Clock } from "./Time";
import { Titleupdate } from "./Titleupdater";

//useEffect

// useEffect(() => {
//   console.log("Component miunted or updated");
// });

function App() {
  const [count, setCount] = useState(0);

  const [count2, setCount2] = useState(0);

  // guaraneed to run only once after the initial render
  useEffect(() => {
    // console.log("Hello!");

    let id = setInterval(() => {
      console.log("tick");
    }, 1000);

    //cleanup function
    // return () => {
    //   console.log("cleanup");
    // };
  }, [count]); // dependency array

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>

      <h1>{count2}</h1>
      <button onClick={() => setCount2((count2) => count2 + 1)}>
        Increment2
      </button>

      <Clock />
      <Titleupdate />
    </>
  );
}

export default App;
