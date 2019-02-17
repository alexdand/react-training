import React, { Component } from "react";
import "./numbers.css";
import Button from "./button";

class Numbers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="divButton">
        {this.props.options.map((opt, idx) => (
          <Button key={idx} emitNumber={this.emitNumber} number={opt} />
        ))}
      </div>
    );
  }

  emitNumber = event => {
    const number = event.target.textContent.trim();
    this.props.handleClick(Number(number));
    if (!event.target.classList.contains("disabled")) {
      event.target.classList.add("disabled");
    } else {
      event.target.classList.remove("disabled");
    }
  };
}

export default Numbers;
