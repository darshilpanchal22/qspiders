import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("darshil");

  const handleClick = () => {
    alert("hey im clicked");
  };

  const handleMouseOver = () => {
    alert("hey i am mouse over");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>click me</button>
      </div>

      <div className="red" onMouseOver={handleMouseOver}>
        im red div
      </div>

      <input
        type="text"
        value={name}
        onChange={handleChange}
      />
    </>
  );
}

export default App;
