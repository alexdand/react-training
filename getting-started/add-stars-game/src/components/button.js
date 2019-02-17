import React from "react";
import "./button.css";

const Button = props => {
  return (
    <button className="button" onClick={props.emitNumber}>
      {" "}
      {props.number}{" "}
    </button>
  );
};

export default Button;
