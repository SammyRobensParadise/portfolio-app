import React, { Component } from 'react';
import anime from 'animejs';
import landingImage from '../assets/landing_page.svg'

class HomeImage extends Component {
  render() {
    return (
      <div className="Home-Image">
      <img src={landingImage} alt="landing"></img>
      </div>
    );
  }
}

export default HomeImage;