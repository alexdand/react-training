import React, { Component } from "react";
import "./quizz.css";

class Quizz extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.myDiv = React.createRef();
  }

  render() {
    return (
      <div className="container quizz">
        <div className="author">
          <img
            src={this.props.author.image}
            alt={this.props.author.name}
            width="300"
          />
        </div>
        <div className="options">
          {this.props.options.map((opt, idx) => (
            <div key={idx} className="option" onClick={this.checkAnswer}>
              {opt}
            </div>
          ))}
        </div>
        {/* <div ref={this.myDiv}>{"set in render <strong>safe</strong>"}</div> */}
      </div>
    );
  }

  checkAnswer = event => {
    const container = document.querySelector(".container");
    event.target.classList.add("selected");
    container.classList.remove("quizz");
    if (this.props.author.books.indexOf(event.target.textContent) < 0) {
      container.classList.add("quizz-wrong");
    } else {
      container.classList.add("quizz-correct");
    }
    console.log(Array.from(document.querySelectorAll(".option")));
  };
}

export default Quizz;
