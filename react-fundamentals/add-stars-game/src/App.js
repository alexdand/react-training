import React, { Component } from 'react';
import './App.css';
import Numbers from './components/numbers';
import Header from './components/header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import Game from './components/game';

library.add(faSync)

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
      attempts: 5,
      numbersClicked: []
    };
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Game attempts={this.state.attempts} />
        <div className="col-md-12 text-center">
          <button className="btn btn-primary"> = </button>
        </div>
        <br />
        <Numbers className="col-md-5" options={this.state.options} handleClick={this.onClickedButton} />
      </div>
    );
  }

  onClickedButton = (number) => {
    let newNumbersClicked;
    if (this.state.numbersClicked.indexOf(number) < 0) {
      newNumbersClicked = [ ...this.state.numbersClicked, number ];
    } else {
      newNumbersClicked = this.state.numbersClicked.filter(n => n !== number);
    }
    this.setState((prevState) => {
      return {
        options: prevState.options,
        attempts: prevState.attempts,
        numbersClicked: newNumbersClicked
      }
    });
  }
}

export default App;
