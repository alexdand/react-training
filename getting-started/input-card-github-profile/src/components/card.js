import React from "react";

const Card = props => {
  return (
    <div style={{ display: "flex", margin: "10px" }}>
      <div>
        <img src={props.data.imageUrl} alt="img" width="75" />
      </div>
      <div>
        <h2>{props.data.userName}</h2>
        <p>{props.data.companyName}</p>
      </div>
    </div>
  );
};

export default Card;
