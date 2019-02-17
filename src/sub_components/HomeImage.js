import React, { Component } from 'react';
import anime from 'animejs';
import landingImage from '../assets/landing_page.svg'
import '../styles/HomeImage.css';
import { CSSTransition } from 'react-transition-group'

class HomeImage extends Component {
    constructor(props){
        super(props)
        this.state = {
            isRendered: false
        }
    }
componentDidMount(){
 setTimeout( () => {
    this.setState({
      isRendered: true
    });
   this.animateImageAppear();
  },2000)
}
animateImageAppear = () =>{
  anime({
    targets: '.landing-img',
    duration: 1000,
    opacity: [0,1],
    easing: 'linear'
  })
}
  render() {
    if(!this.state.isRendered){
      return (
        <div className="home-page">
        <div className="Home-Image-load">
       <p>Generating...</p>
        </div>
        </div>
      )
    }
    return (
      <div className="home-page">
      <div className="Home-Image">
      <img className="landing-img" src={landingImage} alt="landing"></img>
      </div>
      </div>
    );
  }
}

export default HomeImage;