import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Game extends Component {

  constructor(props) {
      super(props);
      this.state = {};
  }

  render() {
    const divClass = { display: 'flex', justifyContent: 'space-around', width: '100%', marginBottom: '10px' };
    const retryButton = { backgroundColor: 'orange', border: 'none', borderRadius: '5px', padding: '5px 10px', color: 'white', cursor: 'pointer' };

    return (
      <div className="row">
        <div className="col-md-5" style={ divClass }>
          { Math.floor(Math.random() * 9) + 1 }
        </div>
        <div className="col-md-2" style={ divClass }>
          <button style={ retryButton }><FontAwesomeIcon icon="sync" /> { this.props.attempts }</button>
        </div>
        <div className="col-md-5">
          entries...
        </div>
      </div>
    );
  }
}

export default Game;