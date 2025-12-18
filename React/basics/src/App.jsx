import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <Card />
      <Card />
      <Card className="border border-black mt-10" />
    </>
  );
};

export default App;
