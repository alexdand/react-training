import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Quizz from "./components/quizz";
import Message from "./components/message";

// TODO
// 1) user should not be able to click multiple times
// 3) implement next question when user clicks next button
// 4) user gets x lives at game start and loses lives for each wrong answer
// 5) implement winning/losing the game (see 5)

// authors, options, random, background

const App = props => {
  return (
    <div className={props.background}>
      <Header />
      <Quizz author={props.authors[props.random]} options={props.options} />
      <p>
        <Link to="/add">Add an author</Link>
      </p>
      <Message />
    </div>
  );
};

export default App;
