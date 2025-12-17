import React from "react";
import { useState } from "react";

const Usernameage = () => {
  let [username, Setusername] = useState("john");
  let [age, setage] = useState(20);

  let updateUsername = () => {
    Setusername("smith");
    setage(22);
  };
  return (
    <div>
      <h1>{username}</h1>
      <h1>{age}</h1>
      <button 
        onClick={() => {
          updateUsername();
        }}
      >
        update data
      </button>
    </div>
  );
};

export default Usernameage;
