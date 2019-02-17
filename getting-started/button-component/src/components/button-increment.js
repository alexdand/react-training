import React, { Component } from 'react';

class Button extends Component {

  handleClick = () => {
    this.props.onClickFunction(this.props.step);
  };

  render () {
    return (
      <button onClick={this.handleClick}>+{this.props.step}</button>
    )
  }
}

export default Button;