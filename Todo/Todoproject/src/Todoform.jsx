import { useState } from "react";
import { TodoList } from "./TodoList";

export function TodoForm() {
  const [todotext, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function addTodo() {
    if (todotext.trim() !== "") {
      if (editIndex !== null) {
        const updatedTodos = todos.map((todo, idx) =>
          idx === editIndex ? todotext : todo
        );
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, todotext]);
      }
      setTodo("");
    }
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
    if (editIndex === index) {
      setEditIndex(null);
      setTodo("");
    }
  }

  function editTodo(index) {
    setTodo(todos[index]);
    setEditIndex(index);
  }

  return (
    <>
      <input type="text" value={todotext} onChange={handleInputChange} />
      <button onClick={addTodo}>
        {editIndex !== null ? "Update Todo" : "Add Todo"}
      </button>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            {todo} <button onClick={() => editTodo(idx)}>Edit</button>{" "}
            <button onClick={() => deleteTodo(idx)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
