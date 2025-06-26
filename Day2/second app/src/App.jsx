import Greeting from "./Greeting.jsx";
import { Name } from "./Greeting.jsx";
import { Player } from "./Hello.jsx";
export default App;
function App() {
  return (
    <>
      <h1>hello</h1>
      <Name />
      {/* <Greeting Name={"Tofuu"}/> */}
      <Greeting firstName={"Budapest"} lastName={"Puuuuuuuumaaaaa"} />
      <Player />
      <Player />
    </>
  );
}
