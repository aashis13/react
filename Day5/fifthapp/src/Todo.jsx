import { useState } from "react";

export function Basic() {
  const [hideCompleted, setHideCompleted] = useState(false);
  const [todos] = useState([
    { id: 1, text: "Learn React", complete: false },
    { id: 2, text: "Write blog post", complete: true },
    { id: 3, text: "Read Clean code", complete: false },
    { id: 4, text: "Walk the dog", complete: true },
  ]);

  const visibleTodos = hideCompleted
    ? todos.filter((item) => !item.complete)
    : todos;

  return (
    <>
      <input type="text" placeholder="Add a todo" /> <br />
      <input
        type="checkbox"
        checked={hideCompleted}
        onChange={() => setHideCompleted((prev) => !prev)}
      />{" "}
      <span>Hide Completed</span>
      <ul>
        {visibleTodos.map((item) => (
          <li key={item.id}>
            <span>
              {item.text} {item.complete ? "✅" : " "}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}
