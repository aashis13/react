import { useState, useRef, useEffect } from "react";

export default function Index() {
  const [text, setText] = useState("");
  const Count = useRef(0);
  const inputref = useRef(null);

  useEffect(() => {
    Count.current = Count.current + 1;
  });

  function handlefocus() {
    console.log(inputref);
  }

  return (
    <div>
      <input
        ref={inputref}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handlefocus}>Focus</button>
      <div>You typed {text}</div>
      <div>You rendered {Count.current} times</div>
    </div>
  );
}
