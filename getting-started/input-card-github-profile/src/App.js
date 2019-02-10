import React, { Component } from 'react';
import CardList from './components/card-list';
import UserForm from './components/user-form';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cards: [
          { userName: 'alex', companyName: 'facebook' }
      ]
    };
  }

  render() {
    return (
      <div>
        <UserForm />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
