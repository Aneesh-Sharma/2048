import React, { Component } from 'react';
import './box.css';

class Box extends Component {
    
  render() {
    const bcolor = {"2":"#eee4da", "4": "#eee1c9", "8":"#f3b27a", "16":"#f69664", "32":"#f77c5f", "64":"#f75f3b", "128":"#edd073","256":"rgb(146, 95, 154)", "512":"rgb(234, 111, 153)","1024":"rgb(224, 173, 105)", "2048":"#569e7e"};
    const color = {"8":"#f9f6f2", "16":"#f9f6f2", "32":"#f9f6f2", "64":"#f9f6f2", "128":"#f9f6f2","256":"#f9f6f2","512":"#f9f6f2","1024":"#f9f6f2", "2048":"#f9f6f2"};
    const font = {"128":"35px", "256":"35px", "512":"35px", "1024":"29px","2048":"29px"};
    const mystyle = {
             "background" : bcolor[this.props.val],
             "color" : color[this.props.val],
             "fontSize" : font[this.props.val]
            };

    return (
      <div className="box">
          <div className="flex-box" style={mystyle}>
             {this.props.val || ""} 
          </div>
      </div>
    );
  }
}

export default Box;
