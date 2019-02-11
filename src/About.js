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
      <div className="the-name-header"><span>Sammy Robens-Paradise</span></div>
      <div className="background-parent">
      <div className="west-coast-background"></div>
      <div className="vertical-text">
      <div className="waterloo-text"><p>Waterloo Ontario</p></div>
      <div className="vancouver-text">Vancouver BC</div>
      </div>
      <div className="the-description-text-about-one"><p>As someone who advocates optimized engineering solutions,
        I continue on my journey to find the most eloquent and beautiful solutions to the worlds most challening problems.
        I have always taken an interest in the way humans interact with technology, and more specifically,
        the way it shapes our experiences. I chose to study Systems Design Engineering because of my
        fascination with the way one user's experience of a product or service can shape their understanding of the world,
        and more specifically, the unique impact of that understanding.</p></div>
      </div>
      <div className="the-description-text-about-one-higher"><p>Through my exposure to, and interest in software,
         as well as my personal persuit of web development I found a keen interest in the connection
        between a user's experience and the interface that is presented to that user</p></div>

        <div onClick={() => this.state.NavigationViewer.popFromNavigationStack()}><div className= "back-button"></div></div>
        <div onClick={() => this.state.NavigationViewer.pushToNavigationStack(AboutTwo)}><div className= "next-button"></div></div>
      </div>
    );
  }
}

export default About;