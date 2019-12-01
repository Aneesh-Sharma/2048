import React, { Component } from 'react';
import Box from './box.js'; 
import './board.css';

class Board extends Component {
  render() {
     let boxs =  this.props.val.map((n,i) => {
         return (<Box val={n} key={i}/>);
     });
    return (
      <div className="board">
          {boxs}
      </div>
    );
  }
}

export default Board;
