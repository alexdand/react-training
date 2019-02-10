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

  incrementCounter = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      };
    });
  }

  render() {
    return (
      <div>
        <Button onClickFunction={this.incrementCounter.bind(this)} />
        <Message counter={this.state.counter} />
      </div>
    );
  }
}

export default App;
