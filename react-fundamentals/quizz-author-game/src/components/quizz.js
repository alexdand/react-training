import React, { Component } from "react";
import "./quizz.css";

class Quizz extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="author">
          <img
            src={this.props.author.image}
            alt={this.props.author.name}
            width="300"
          />
        </div>
        <div className="options">
          {this.props.options.map((opt, idx) => (
            <div key={idx} className="option">
              {opt}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Quizz;
