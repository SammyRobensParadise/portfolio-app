import React, { Component } from 'react';
import logo from './logo.svg';
import './Loading.css';
import anime from 'animejs';

class Loading extends Component {
  constructor(props){
    super(props);
    this.state ={
      isTriggered: false,
      percentage: 0
    }
  }
componentDidMount(){
  setInterval(() => {
    let index = this.state.percentage+1;
    if(index > 100){
      clearInterval(this.state)
    }else {
    this.setState({percentage: index})}
  }
    ,20);
}
  render() {
    return (
      <div className="loading-bar">
      <div className="loading-percentage"><span className="loading-text">Loading</span><span className="load-percentage">{" "+this.state.percentage+"%"}</span></div>
      <div className="loading-bar-inner" percentage={this.state.percentage} style={{width: `${this.state.percentage}%`}}></div>
      </div>
    );
  }
}

export default Loading;