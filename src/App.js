import React, { Component } from 'react';
import Score from './score.js'; 
import Board from './board.js'; 
import ArrowKeysReact from 'arrow-keys-react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = { 
      nums: [],
      snum: [2,4]
    };
    ArrowKeysReact.config({
      left: () => {
        alert('left key detected.');
      },
      right: () => {
        alert('right key detected.');
      },
      up: () => {
        alert('up key detected.');
      },
      down: () => {
        alert('down key detected.');
      }
    });
  }
  //64,2,1024,4,16,4,32,128,4,4,8,2048,0,2,4,512
  componentDidMount(){
    this.newStart();
    this.ref.current.focus();
  }
  newStart=()=>{
    let nums=[];
    for(let i=0;i<16;i++){
      nums.push(0);
    }
    nums[Math.round(Math.random() * 15)] = this.state.snum[Math.round(Math.random() * 1)];
    this.setState({nums: nums});
  }
  afterMove=()=>{
    let rno = Math.round(Math.random() * 15);
    let nums = this.state.nums;
    while(nums[rno]){
      rno = Math.round(Math.random() * 15);
    }
    nums[rno] = this.state.snum[Math.round(Math.random() * 1)];
  }
  action=()=>{
    this.afterMove();
  }
  render() {
    return (
      <div id="App" className="App" {...ArrowKeysReact.events} tabIndex="1" ref={this.ref}>
        <Score newStart={this.newStart}/>
        <Board val={this.state.nums}/>
      </div>
    );
  }
}

export default App;
