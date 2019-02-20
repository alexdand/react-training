import React, { Component } from "react";
import "./message.css";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hola"
    };
    this.uppercase = this.uppercase.bind(this);
  }

  uppercase() {
    this.setState(prevState => ({
      message: prevState.message.toUpperCase()
    }));
  }
  render() {
    return (
      <div className="footer">
        Tienes 3 vidas restantes
        <button onClick={this.uppercase}>{this.state.message}</button>
      </div>
    );
  }
}

export default Message;
