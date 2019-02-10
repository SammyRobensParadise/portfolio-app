import React, { Component } from 'react';
import anime from 'animejs';
import NavigationHandler from './NavigationHandler';
import About from './About';
import './styles/WorkOne.scss';
import './styles/Navigation.scss';
import ffLogo from './img/ff_logo_red_.png';
import krogerLogo from './img/Current_Kroger_logo.png';
import spheroLogo from './img/sphero2x.png';
import luluLogo from './img/lulu@2x.png';

class Work extends Component {
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
    return (
      <div className="work-one">
      <div className="work-title">Work</div>
      <div className="ff_logo">
      <img className="ff-logo-img" src={ffLogo} alt="finger food logo"></img></div>
      <div className="the-description-text"><p>I worked to quantify and evaluate bleeding edge tech solutions for some of our industry's most challenging problems. 
        I leverage analytics and user experience data to ship game changing products of every shape and size.</p></div>
        <div className="the-role-header"><span>Role:</span></div>
        <div className="the-job-header"><span>QA Lead &#38; Analytics developer</span></div>
        <div className="ff-job-details-button"><div className="details-btn-text">Details...</div></div>
        <div className="projects-header"><span>Disclosable Projects:</span></div>
        <div className="projects-container">
        <img className="lulu-logo" src={luluLogo} alt="Lululemon"></img>
        <img className="kroger-logo" src={krogerLogo} alt="Kroger"></img>
        <img className="sphero-logo" src={spheroLogo} alt="sphero"></img>
        </div>
        <div onClick={() => this.state.NavigationViewer.pushToNavigationStack(About)}><div className= "more-button"></div></div>
        <div onClick={() => this.state.NavigationViewer.popFromNavigationStack()}><div className= "back-button"></div></div>
        <div onClick={() => this.state.NavigationViewer.pushToNavigationStack(About)}><div className= "next-button"></div></div>
      </div>
    );
  }
}

export default Work;