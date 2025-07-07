import { useState } from "react";

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
        const updatedTodos = todos.map((todo, index) =>
          index === editIndex ? todotext : todo
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
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => editTodo(index)}>Edit</button>{" "}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
