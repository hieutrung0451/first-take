import React from "react";
import testImage from "../assets/test.jpg";

const Image = () => {
  return (
    <li className="mr-12 mb-4 w-44">
      <img src={testImage} alt="test" />
    </li>
  );
};

export default Image;
