import React, { Component } from 'react';
import NavigationHandler from './NavigationHandler';
import './styles/AboutThree.scss';
import './styles/Navigation.scss';
import anime from 'animejs';

class AboutThree extends Component {
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
      <div className="About-three">
    <div className="aboutthree-title">Toolbox</div>
      <div className="background-parent-about-three">
      <div className="toolkit-background"></div>
      </div>
        <div onClick={() => this.state.NavigationViewer.popFromNavigationStack()}><div className= "back-button"></div></div>
        <div className="screen-number"><p>3/3</p></div>
      </div>
    );
  }
}

export default AboutThree;