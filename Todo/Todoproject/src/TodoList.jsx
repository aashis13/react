export function TodoList({ doing=[], onDelete }) {
  return (
    <>
      <ul>
        {doing.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => onDelete(index)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
}
