import React from "react";
import "./quizz.css";

const Quizz = props => {
  console.log(props);
  return (
    <div className={"container quizz " + props.background}>
      <div className="author">
        <img src={props.author.image} alt={props.author.name} width="300" />
      </div>
      <div className="options">
        {props.options.map((opt, idx) => (
          <div
            key={idx}
            className="option"
            onClick={event =>
              props.checkAnswer(
                props.author.books.indexOf(event.target.textContent) < 0
              )
            }
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quizz;
