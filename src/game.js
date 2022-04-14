import React from 'react';
import Board from './board'
import './index.css';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
          <Board />
      </div>
    );
  }
}

export default Game;