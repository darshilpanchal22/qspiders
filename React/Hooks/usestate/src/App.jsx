import { useState } from "react";
import Usernameage from "./Usernameage";
import Displaypara from "./Displaypara";

function App() {
  const [count, setCount] = useState(0);
  console.log(useState());

  return (
    <>
      <div>
        <h2> Count: {count}</h2>
        <button onClick={() => setCount(count - 1)}> decrease count</button>
      </div>
      <Usernameage />
      <Displaypara />
    </>
  );
}

export default App;
