import React, { Component } from "react";
import "./message.css";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="footer">Tienes 3 vidas restantes</div>;
  }
}

export default Message;
