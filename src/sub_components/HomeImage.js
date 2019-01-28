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
}
  render() {
    return (
      <div className="Home-Image">

      <img src={landingImage} alt="landing"></img>
      </div>
    );
  }
}

export default HomeImage;