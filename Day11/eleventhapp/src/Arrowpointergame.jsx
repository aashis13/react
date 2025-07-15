import { useEffect, useState } from "react";

const GRID_SIZE = 30;
const CELL_SIZE = 10;
const INIT_SNAKE = [{ x: 0, y: 0 }];
const INIT_FOOD = { x: 20 * CELL_SIZE, y: 20 * CELL_SIZE };

const DIRECTIONS = {
  ArrowUp: { x: 0, y: -CELL_SIZE },
  ArrowDown: { x: 0, y: CELL_SIZE },
  ArrowLeft: { x: -CELL_SIZE, y: 0 },
  ArrowRight: { x: CELL_SIZE, y: 0 },
};

export function Arrow() {
  const [snake, setSnake] = useState(INIT_SNAKE);
  const [food, setFood] = useState(INIT_FOOD);
  const [direction, setDirection] = useState("ArrowRight");
  const [point, setPoint] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isStarted, setIsStarted] = useState(false); // NEW

  // Handle direction change and start game
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (DIRECTIONS[event.key]) {
        setIsStarted(true); // Start game on first arrow key
        setDirection((prev) => {
          const prevDir = DIRECTIONS[prev];
          const nextDir = DIRECTIONS[event.key];
          if (prevDir.x + nextDir.x === 0 && prevDir.y + nextDir.y === 0) {
            return prev;
          }
          return event.key;
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Game loop
  useEffect(() => {
    if (gameOver || !isStarted) return; // Only run if started
    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        const head = prevSnake[0];
        const move = DIRECTIONS[direction];
        const newHead = {
          x:
            (head.x + move.x + GRID_SIZE * CELL_SIZE) % (GRID_SIZE * CELL_SIZE),
          y:
            (head.y + move.y + GRID_SIZE * CELL_SIZE) % (GRID_SIZE * CELL_SIZE),
        };

        // Check collision with self
        if (
          prevSnake.some((seg) => seg.x === newHead.x && seg.y === newHead.y)
        ) {
          setGameOver(true);
          return prevSnake;
        }

        let newSnake = [newHead, ...prevSnake];
        // Check food
        if (newHead.x === food.x && newHead.y === food.y) {
          setFood({
            x: Math.floor(Math.random() * GRID_SIZE) * CELL_SIZE,
            y: Math.floor(Math.random() * GRID_SIZE) * CELL_SIZE,
          });
          setPoint((p) => p + 1);
        } else {
          newSnake.pop();
        }
        return newSnake;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [direction, food, gameOver, isStarted]);

  // Reset
  const handleReset = () => {
    setSnake(INIT_SNAKE);
    setFood(INIT_FOOD);
    setDirection("ArrowRight");
    setPoint(0);
    setGameOver(false);
    setIsStarted(false); // Reset start state
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          height: GRID_SIZE * CELL_SIZE,
          width: GRID_SIZE * CELL_SIZE,
          border: "2px solid white",
          marginLeft: "40%",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: food.x,
            top: food.y,
            width: CELL_SIZE,
            height: CELL_SIZE,
            background: "aqua",
            borderRadius: "10px",
          }}
        ></div>
        {snake.map((seg, idx) => (
          <div
            key={idx}
            style={{
              position: "absolute",
              left: seg.x,
              top: seg.y,
              width: CELL_SIZE,
              height: CELL_SIZE,
              borderRadius: "20px",
              background: idx === 0 ? "red" : "red",
              // boxShadow:"2px 5px 15px 10px",
            }}
          ></div>
        ))}
      </div>
      <h1>YOUR POINT: {point}</h1>
      {!isStarted && (
        <h2 style={{ color: "yellow" }}>Press any arrow key to start!</h2>
      )}
      {gameOver && <h2 style={{ color: "red" }}>Game Over!</h2>}
      <button
        onClick={handleReset}
        style={{
          marginLeft: "48%",
          background: "aqua",
          color: "black",
          position: "absolute",
        }}
      >
        Reset
      </button>
    </>
  );
}
