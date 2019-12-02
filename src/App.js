import React, { Component } from 'react';
import Score from './score.js'; 
import Board from './board.js'; 
import ArrowKeysReact from 'arrow-keys-react';
import GameOver from './gameover.js'; 
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = { 
      nums: [],
      snum: [2,4],
      gameOver: false,
      score: 0,
      best: 0,
    };
    ArrowKeysReact.config({
      left: () => {
        this.moveLeft();
      },
      right: () => {
        this.moveRight();
      },
      up: () => {
        this.moveUp();
      },
      down: () => {
        this.moveDown();
      }
    });
  }
  //64,2,1024,4,16,4,32,128,4,4,8,2048,0,2,4,512
  moveLeft=()=>{
    let nums = this.state.nums;
    let score = this.state.score;
    let best = this.state.best;
    let i,j,k,t;
    for(i=0;i<4;i++){
      k=i*4;
      for(j=i*4; j<i*4+4; j++){
          if(nums[j]){
            t = nums[j];
            nums[j] = 0;
            nums[k] = t;
            k++;
          }
      }
      for(j=i*4; j<i*4+3; j++){
        if(nums[j] == nums[j+1]){
          score += (nums[j])*2;
          nums[j] += nums[j+1];
          nums[j+1]=0;
        }
      }
      k=i*4;
      for(j=i*4; j<i*4+4; j++){
        if(nums[j]){
          t = nums[j];
          nums[j] = 0;
          nums[k] = t;
          k++;
        }
      }
    }
    if(score > best){
      best = score;
    }
    this.setState({nums: nums, score: score,best : best});
    setTimeout(()=>{
      this.afterMove(nums);
    },300); 
  }

  moveRight=()=>{
    let nums = this.state.nums;
    let score = this.state.score;
    let best = this.state.best;
    let i,j,k,t;
    for(i=0;i<4;i++){
      k=i*4 + 3;
      for(j=i*4 + 3; j>=i*4; j--){
          if(nums[j]){
            t = nums[j];
            nums[j] = 0;
            nums[k] = t;
            k--;
          }
      }
      for(j=i*4+3; j>i*4; j--){
        if(nums[j] == nums[j-1]){
          score += (nums[j])*2;
          nums[j] += nums[j-1];
          nums[j-1]=0;
        }
      }
      k=i*4 + 3;
      for(j=i*4 + 3; j>=i*4; j--){
          if(nums[j]){
            t = nums[j];
            nums[j] = 0;
            nums[k] = t;
            k--;
          }
      }
    }
    if(score > best){
      best = score;
    }
    this.setState({nums: nums, score: score,best : best});
    setTimeout(()=>{
      this.afterMove(nums);
    },300);
  }

  moveUp=()=>{
    let nums = this.state.nums;
    let score = this.state.score;
    let best = this.state.best;
    let i,j,k,t;
    for(i=0;i<4;i++){
      k=i;
      for(j=i ; j<nums.length; j=j+4){
          if(nums[j]){
            t = nums[j];
            nums[j] = 0;
            nums[k] = t;
            k=k+4;
          }
      }
      for(j=i; j<nums.length; j=j+4){
        if(nums[j] == nums[j+4]){
          score += (nums[j])*2;
          nums[j] += nums[j+4];
          nums[j+4]=0;
        }
      }
      k=i;
      for(j=i ; j<nums.length; j=j+4){
          if(nums[j]){
            t = nums[j];
            nums[j] = 0;
            nums[k] = t;
            k=k+4;
          }
      }
    }
    if(score > best){
      best = score;
    }
    this.setState({nums: nums, score: score,best : best});
    setTimeout(()=>{
      this.afterMove(nums);
    },300);
  }

  moveDown=()=>{
    let nums = this.state.nums;
    let score = this.state.score;
    let best = this.state.best;
    let i,j,k,t;
    for(i=0;i<4;i++){
      k=12+i;
      for(j=12+i ; j>=0; j=j-4){
          if(nums[j]){
            t = nums[j];
            nums[j] = 0;
            nums[k] = t;
            k=k-4;
          }
      }
      for(j=12+i; j>0; j=j-4){
        if(nums[j] == nums[j-4]){
          score += (nums[j])*2;
          nums[j] += nums[j-4];
          nums[j-4]=0;
        }
      }
      k=12+i;
      for(j=12+i ; j>=0; j=j-4){
          if(nums[j]){
            t = nums[j];
            nums[j] = 0;
            nums[k] = t;
            k=k-4;
          }
      }
    }
    if(score > best){
      best = score;
    }
    this.setState({nums: nums, score: score,best : best});
    setTimeout(()=>{
      this.afterMove(nums);
    },300);
  }

  componentDidMount(){
    this.newStart();
    this.ref.current.focus();
  }

  handleTouchStart=(e)=>{
    if(!e.touches.length){
      return ;
    }
   this.startx = e.touches[0].clientX;
   this.starty = e.touches[0].clientY;
   this.touch = true;
  }

  handleTouchMove=(e)=>{
    if(!e.touches.length){
      return ;
    }
    this.endx = e.touches[0].clientX;
    this.endy = e.touches[0].clientY;
    this.touch = true;
   }

   handleTouchEnd=(e)=>{
     if(this.startx == null || this.starty == null || this.endx == null || this.endy == null ){
      return;
     }
    if(Math.abs(this.startx-this.endx)>Math.abs(this.starty-this.endy)){
      if(this.startx<this.endx){
        this.moveRight();
      }else{
        this.moveLeft();
      }
    }else{
      if(this.starty<this.endy){
        this.moveDown();
      }else{
        this.moveUp();
      }
    }
    this.startx = null;
    this.starty = null;
    this.endy = null;
    this.endx = null;
   }

  newStart=()=>{
    let nums=[];
    for(let i=0;i<16;i++){
      nums.push(0);
    }
    nums[Math.round(Math.random() * 15)] = this.state.snum[Math.round(Math.random() * 1)];
    this.setState({nums: nums, gameOver: false, score: 0});
  }

  afterMove=()=>{
    let nums = this.state.nums;
    let rno = Math.round(Math.random() * 15);
    let i,j;
    let empty = false; 
    for(i=0;i<nums.length;i++){
      if(!nums[i] || (nums[i]==nums[i+1])&&i!=3&&i!=7&&i!=11){
        empty= true;
      }
    }
    if(!empty){
      this.setState({gameOver: true});
      return;
    }
    while(nums[rno]){
      rno = Math.round(Math.random() * 15);
    }
    nums[rno] = this.state.snum[Math.round(Math.random() * 1)];
    this.setState({nums: nums});
  }
  
  render() {
    return (
      <div id="App" className="App" {...ArrowKeysReact.events} tabIndex="1" ref={this.ref} onTouchStart={e=>{this.handleTouchStart(e)}} onTouchMove={e=>{this.handleTouchMove(e)}} onTouchEnd={e=>{this.handleTouchEnd(e)}}>
        {this.state.gameOver ? <GameOver start={this.newStart}/> : ""}
        <Score newStart={this.newStart} score={this.state.score} best={this.state.best}/>
        <Board val={this.state.nums}/>
      </div>
    );
  }
}

export default App;
