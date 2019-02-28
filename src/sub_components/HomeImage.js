import React, { Component } from 'react';
import anime from 'animejs';

import '../styles/HomeImage.css';


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
       <p className="generating-text">Generating...</p>
        </div>
        </div>
      )
    }
    return (
      <div className="home-page">
      <div className="Home-Image">
      <div className="landing-img"></div>
     { /*<!--img className="landing-img" srcset={landingImageIpad+ " 1024w, " + landingImage+" 1080w"}
       sizes="(min-width:1080px) 1080px, (max-width:1080px) 1024px" 
    src={landingImage} alt="landing"></img> */}
      </div>
      </div>
    );
  }
}

export default HomeImage;