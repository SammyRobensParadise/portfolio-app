import React, { Component } from 'react';
import anime from 'animejs';
import landingImage from '../assets/landing_page.svg'
import '../styles/HomeImage.css';
import { Container, Row, Col } from 'reactstrap';

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
  },1500)
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
        <div className="Home-Image">
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