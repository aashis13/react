import { useState, useRef, useEffect } from "react";

export default function Index() {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  const Count = useRef(0);
  const inputref = useRef(null);
  const floatingInputRef = useRef(null);
  const previousText = useRef("");

  useEffect(() => {
    Count.current = Count.current + 1;
    previousText.current = text;
  }, [text]);

  function handlefocus() {
    inputref.current && inputref.current.focus();
  }

  function handleunfocus() {
    inputref.current && inputref.current.blur();
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        floatingInputRef.current &&
        !floatingInputRef.current.contains(e.target)
      ) {
        setVisible(false);
      }
    }
    if (visible) {
      window.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  return (
    <div style={{ position: "relative" }}>
      <input
        ref={inputref}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handlefocus}>Focus</button>
      <button onClick={handleunfocus}>Unfocus</button>
      <div>You typed {text}</div>
      <div>Previous Text: {previousText.current}</div>
      <div>You rendered {Count.current} times</div>
      <button onClick={() => setVisible(true)}>Enter</button>
      {visible && (
        <input
          ref={floatingInputRef}
          style={{
            position: "absolute",
            background: "#fff",
            border: "2px solid blue",
            borderRadius: "50px",
            zIndex: 10,
          }}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}
    </div>
  );
}
