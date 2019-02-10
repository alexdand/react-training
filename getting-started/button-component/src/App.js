import React, { Component } from 'react';
import './App.css';
import Button from './components/button-increment';
import Message from './components/message';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementCounter = (step) => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + step
      };
    });
  }

  render() {
    return (
      <div>
        <Button onClickFunction={this.incrementCounter} step={1} />
        <Button onClickFunction={this.incrementCounter} step={5} />
        <Button onClickFunction={this.incrementCounter} step={10} />
        <Button onClickFunction={this.incrementCounter} step={100} />
        <Button onClickFunction={this.incrementCounter} step={1000} />
        <Message counter={this.state.counter} />
      </div>
    );
  }
}

export default App;
