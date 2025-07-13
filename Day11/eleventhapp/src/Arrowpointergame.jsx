import { useEffect, useState } from "react";

export function Arrow() {
  const boxSize = 200;
  const pointerSize = 20;
  const step = 10;

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyDown = (event) => {
      setPosition((prev) => {
        let { x, y } = prev;
        switch (event.key) {
          case "ArrowUp":
            y = Math.max(0, y - step);
            break;
          case "ArrowDown":
            y = Math.min(boxSize - pointerSize, y + step);
            break;
          case "ArrowLeft":
            x = Math.max(0, x - step);
            break;
          case "ArrowRight":
            x = Math.min(boxSize - pointerSize, x + step);
            break;
          default:
            return prev;
        }
        return { x, y };
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div
        style={{
          position: "absolute",
          height: `${boxSize}px`,
          width: `${boxSize}px`,
          border: "2px solid white",
          marginLeft: "40%",
          background: "#222",
        }}
      >
        <div
          style={{
            position: "relative",
            left: position.x,
            top: position.y,
            width: pointerSize,
            height: pointerSize,
            background: "red",
          }}
        ></div>
      </div>
    </>
  );
}
