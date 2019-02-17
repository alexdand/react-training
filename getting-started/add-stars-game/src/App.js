import React, { Component } from "react";
import "./App.css";
import Numbers from "./components/numbers";
import Header from "./components/header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Game from "./components/game";

library.add(faSync);
library.add(faStar);

function getNumberList() {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

function getRandomStars() {
  return Math.floor(Math.random() * 9) + 1;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: getNumberList(),
      attempts: 5,
      numbersClicked: [],
      randomStars: getRandomStars()
    };
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Game
          randomStars={this.state.randomStars}
          attempts={this.state.attempts}
          selectedNumbers={this.state.numbersClicked}
          resetGame={this.resetGame}
        />
        <div className="col-md-12 text-center">
          <button className="btn btn-primary"> = </button>
        </div>
        <br />
        <Numbers
          className="col-md-5"
          options={this.state.options}
          handleClick={this.onClickedButton}
        />
      </div>
    );
  }

  resetGame = () => {
    this.setState(prevState => {
      return {
        randomStars: getRandomStars(),
        numbersClicked: [],
        attempts: prevState.attempts - 1
      };
    });
  };

  onClickedButton = number => {
    let newNumbersClicked;
    let sumClicked;
    if (this.state.numbersClicked.indexOf(number) < 0) {
      newNumbersClicked = [...this.state.numbersClicked, number];
      sumClicked = newNumbersClicked.reduce((acc, prev) => {
        return acc + prev;
      }, 0);
    } else {
      newNumbersClicked = this.state.numbersClicked.filter(n => n !== number);
    }
    this.setState(prevState => {
      return {
        options: prevState.options,
        attempts: prevState.attempts,
        numbersClicked: newNumbersClicked
      };
    });
    if (sumClicked === this.state.randomStars) {
      this.setState(prevState => {
        return {
          randomStars: getRandomStars(),
          numbersClicked: []
        };
      });
    }
  };
}

export default App;
