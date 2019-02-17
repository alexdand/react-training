import React, { Component } from 'react';
import CardList from './components/card-list';
import UserForm from './components/user-form';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  addNewUser = (user) => {
    fetch(`https://api.github.com/users/${user}`)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      const user = { userName: myJson.name, companyName: myJson.company, imageUrl: myJson.avatar_url };
      this.setState((prevState) => ({
        cards: prevState.cards.concat(user)
      }));
    });
  }

  render() {
    return (
      <div>
        <UserForm onSubmitUser={this.addNewUser} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
