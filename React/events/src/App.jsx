import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [value, setName] = useState("darshil");

  const handleClick = () => {
    alert("hey im clicked");
  };
  const handleMouseOver = () => {
    alert("hey i am mouse over");
  };
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>click me</button>
      </div>
      <div className="red" onMouseOver={handleMouseOver}>
        im red dev
      </div>
      <input type="text" value={name} />
    </>
  );
}

export default App;
