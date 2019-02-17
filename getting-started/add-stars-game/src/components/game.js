import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./button";
import "./game.css";

const _ = require("lodash");

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-5 stars">
          {_.range(this.props.randomStars).map(i => (
            <FontAwesomeIcon icon="star" key={i} />
          ))}
        </div>
        <div className="col-md-2 stars">
          <button
            className="retryButton"
            onClick={() => this.props.resetGame()}
          >
            <FontAwesomeIcon icon="sync" /> {this.props.attempts}
          </button>
        </div>
        <div className="col-md-5">
          {this.props.selectedNumbers.map((n, idx) => (
            <Button key={idx} number={n} />
          ))}
        </div>
      </div>
    );
  }
}

export default Game;
