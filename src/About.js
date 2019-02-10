import React, { Component } from 'react';
import NavigationHandler from './NavigationHandler';
import './styles/AboutOne.scss';
import './styles/Navigation.scss';
import AboutTwo from './AboutTwo';
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
        <div onClick={() => this.state.NavigationViewer.popFromNavigationStack()}><div className= "back-button"></div></div>
        <div onClick={() => this.state.NavigationViewer.pushToNavigationStack(AboutTwo)}><div className= "next-button"></div></div>
      </div>
    );
  }
}

export default About;