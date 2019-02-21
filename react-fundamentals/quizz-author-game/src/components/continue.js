import React from "react";

const Continue = props => {
  return (
    <div>
      {props.show ? (
        <button className="button-continue" onClick={props.onContinue}>
          Continue
        </button>
      ) : null}
    </div>
  );
};

export default Continue;
