import React from "react";

const Card = ({ className }) => {
  return (
    <div
      className={`border text-red-900 w-40  pb-10 mb-5 mt-2  bg-blue-400 ${className}`}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt=""
        className="w-20 h-20 mx-auto"
      />
      <h1 className="text-center">darshil</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Voluptatum, libero!
      </p>
    </div>
  );
};

export default Card;
