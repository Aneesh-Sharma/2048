import React, { Component } from 'react';
import './score.css';

class Score extends Component {
  render() {
    return (
      <div className="info-box">
        <div className="app-name">
            2048
        </div>
        <div className="score">
            <div className="score-box">
                <div className="score-heading">score</div>
                <div className="score-val">{this.props.score}</div>
            </div>
            <div className="score-box">
                <div className="score-heading">best</div>
                <div className="score-val">{this.props.best}</div>
            </div>
        </div>
        <div className="rule">
            Join the numbers and get to the<span className="bold"> 2048 tile!</span>
        </div>
        <div className="new-game" onClick={this.props.newStart}>
            New Game
        </div>
      </div>
    );
  }
}

export default Score;
