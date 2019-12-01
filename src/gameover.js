import React, { Component } from 'react';
import Box from './box.js'; 
import './gameover.css';

class GameOver extends Component {
  render() {
    return (
      <div className="game-over">
         <div className="label">Game Over!</div>
         <div className="try-again" onClick={this.props.start}>
             Try Again
         </div>
      </div>
    );
  }
}

export default GameOver;
