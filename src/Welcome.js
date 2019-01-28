import React, { Component } from 'react';
import './styles/Welcome.css';
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
      this.animateEaseIn();
    },3200)
  }
  animateEaseIn = () => {
    anime({
      targets: '.welcome-msg',
      duration: 1200,
      opacity: [0,1],
      easing: 'linear'
    })
  }
  animateEaseOut = () => {
    anime({
      targets: ['.welcome-msg','.welcome-txt'],
      duration: 1200,
      opacity: [1,0],
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