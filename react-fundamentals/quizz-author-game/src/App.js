import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Quizz from "./components/quizz";
import Message from "./components/message";
import AUTHORS from "./authors";

// TODO
// 1) shuffle options display
// 2) action click on book
// 3) display green or red for accepted answer or wrong
// 4) next question
// 5) lives?
// 6) winning/losing the game (see 5)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: AUTHORS,
      options: AUTHORS.map(a => a.books[Math.floor(Math.random() * 4)]),
      random: Math.floor(Math.random() * 4)
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Quizz
          author={this.state.authors[this.state.random]}
          options={this.state.options}
        />
        <Message />
      </div>
    );
  }
}

export default App;
