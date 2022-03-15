import React from "react";
// dumb component to write simple test

const Button = ({ onClick, buttonText }) => (
  <button onClick={onClick}>{buttonText}</button>
);

export default Button;
