import React, { Component } from 'react';
import './numbers.css';

class Numbers extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const divButtons = { display: 'flex', justifyContent: 'space-around', width: '60%', margin: '0 20%',
    border: '1px solid lightgrey', 'padding': '5px 15px', boxSizing: 'border-box', borderRadius: '5px', cursor: 'pointer' };
    const roundButton = { borderRadius: '50%', height: '30px', width: '30px', color: 'black',
    backgroundColor: 'lightgrey', border: 'none', cursor: 'pointer', outline: '0', fontSize: '18px' };
    return (
      <div style={ divButtons }>
        { this.props.options.map((opt, idx) => {
          return <button key={ idx } style={ roundButton } onClick={ this.emitNumber }> { opt } </button>
        }) }
      </div>
    );
  }

  emitNumber = (event) => {
    const number = event.target.textContent.trim();
    this.props.handleClick(number);
    if(!event.target.classList.contains('disabled')) {
      event.target.classList.add('disabled');
    } else {
      event.target.classList.remove('disabled');
    }
  }
}

export default Numbers;