import React, { Component } from 'react';
import NavigationHandler from './NavigationHandler';
import './styles/AboutOne.scss';
import './styles/Navigation.scss';
import AboutTwo from './AboutTwo';
import WaterlooTxt from './assets/waterloo_txt.svg';
import VancouverTxt from './assets/vancouver_txt.svg';

import anime from 'animejs';

class About extends Component {
  constructor(props){
    super(props);
      this.state = {
        _isRendered: false,
        NavigationViewer: new NavigationHandler ()
      }
  }
  componentDidMount(){
    this.setState({
      _isRendered: true
    })
  }
  render() {
    //ANIMATIONS REQUIRED
    return (
      <div className="About-one">
      <div className="aboutone-title">About</div>
      <div className="background-parent">
      <div className="west-coast-background"></div>
      <div className="vertical-text">
      <div className="waterloo-text"><p>Waterloo Ontario</p></div>
      <div className="vancouver-text">Vancouver BC</div>
      </div>
      </div>

        <div onClick={() => this.state.NavigationViewer.popFromNavigationStack()}><div className= "back-button"></div></div>
        <div onClick={() => this.state.NavigationViewer.pushToNavigationStack(AboutTwo)}><div className= "next-button"></div></div>
      </div>
    );
  }
}

export default About;