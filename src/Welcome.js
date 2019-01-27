import React, { Component } from 'react';
import './Welcome.css';
import anime from 'animejs';

class Welcome extends Component {
  constructor(props){
    super(props);
    this.state = {
      welcomeTxt: "Welcome.",
      showSubTxt: false
    }
  }
  animeJS = {};
  updateMsg = "It looks like you've made it from cyber space."
  showtextDiv = <div className="welcome-msg"><span>{this.updateMsg}</span></div>
  componentDidMount(props){
    setTimeout(() => {
      this.setState({showSubTxt: true});
      this.animateEase();
    },3000)
  }
  animateEase = () => {
    anime({
      targets: '.welcome-msg',
      duration: 1200,
      opacity: [0,1],
      easing: 'linear'
    })
  }
  render(props) {
    if(!this.state.showSubTxt){
      return(
        <div className="welcome-pan">
        <div className="welcome-txt"><span>{this.state.welcomeTxt}</span></div>
        </div>
      )
    }
    return (
      <div className="welcome-pan">
      <div className="welcome-txt"><span>{this.state.welcomeTxt}</span></div>
      <div>{this.showtextDiv}</div>
      </div>
    );
  }
}

export default Welcome;