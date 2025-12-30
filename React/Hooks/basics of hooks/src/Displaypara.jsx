import React from "react";
import { useState } from "react";
const Displaypara = () => {
  let [text, settext] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => settext(e.target.value)}
      />
      <p> your type :{text}</p>
    </div>
  );
};

export default Displaypara;
