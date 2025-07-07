export function TodoList({ doing = [], onDelete }) {
  return (
    <>
      <ul>
        {doing.map((index) => (
          <li key={index}></li>
        ))}
      </ul>
    </>
  );
}
