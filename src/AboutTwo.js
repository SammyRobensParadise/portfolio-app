import React, { Component } from 'react';
import NavigationHandler from './NavigationHandler';
import './styles/AboutTwo.scss';
import './styles/Navigation.scss';
import anime from 'animejs';

class AboutTwo extends Component {
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
      <div className="About-two">
    <div className="abouttwo-title">Education</div>
      <div className="background-parent-about-two">
      <div className="waterloo-background"></div>
      <div className="the-about-systems-header"><span>Systems Design Engineering, The university of Waterloo</span></div>
      <div className="the-description-text-education-one"><p>As someone who advocates optimized engineering solutions,
        I continue on my journey to find the most eloquent and beautiful solutions to the worlds most challening problems.
        I have always taken an interest in the way humans interact with technology, and more specifically,
        the way it shapes our experiences. I chose to study Systems Design Engineering because of my
        fascination with the way one user's experience of a product or service can shape their understanding of the world,
        and more specifically, the unique impact of that understanding.</p></div>
        <div className="waterloo-grad-year"><span>2017-2023</span></div>
      </div>
        <div onClick={() => this.state.NavigationViewer.popFromNavigationStack()}><div className= "back-button"></div></div>
        <div onClick={() => this.state.NavigationViewer.pushToNavigationStack()}><div className= "next-button"></div></div>
      </div>
    );
  }
}

export default AboutTwo;