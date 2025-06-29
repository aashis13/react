export function stop({ setString }) {
  return (
    <>
      <button onClick={() => setString("Stop")}>
        Change to <span>{change}</span>
      </button>
    </>
  );
}
