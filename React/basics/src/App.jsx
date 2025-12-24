import React from "react";
import Card from "./components/Card";
import Projectwithprops from "./components/Projectwithprops";

const App = () => {
  const arr = [10, 20, 30, 40];

  return (
    <>
      <div>
        {arr.map(function (elem, index) {
          return <p key={index}>{elem}</p>;
        })}
      </div>

      {/* <Card /> */}
      {/* <Card className="border border-black mt-10" /> */}
      {/* <Projectwithprops /> */}
      {/* <User /> */}
    </>
  );
};

export default App;
