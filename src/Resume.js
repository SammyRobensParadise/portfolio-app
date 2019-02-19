import React, {
    Component
  } from 'react';
  import HomeImage from './sub_components/HomeImage';
  import './styles/Resume.scss';
  import './styles/Navigation.scss';
  import anime from 'animejs';
  import NavigationHandler from './NavigationHandler';
  import App from './App';
  import Feature from './Feature';
  import Home from './Home';
  
  
  class Resume extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isRendered: false,
        NavigationViewer: new NavigationHandler()
      }
    }
    componentDidCatch(error, info) {
      console.log(error, info);
    }
    componentDidMount() {
      this.setState({
        isRendered: true
      });
      setTimeout(() => {
        this.animateGlow(this.setisViewed)
      }, 10000)
      return true;
    }
    componentDidUpdate() {
      return true;
    }
    animateGlow = () => {
      anime({
        targets: '.glow-button-inner',
        direction: 'alternate',
        loop: true,
        easing: 'linear',
        duration: 2500,
        borderRadius: ['25%', '35%'],
        boxShadow: [' inset 0rem 0rem 0rem 0rem #450092', ' 0rem 0rem 2rem 0.1rem #450092']
      })
    }
    //ANIMATIONS REQUIRED
    render() {
      return (
        <div className="Resume">
        <div className="navigation-bar">
        <ul>
        <li className="home" onClick={() => this.state.NavigationViewer.pushToNavigationStack(Home)}><span className="navigation">Start Over...</span></li>
         </ul>
         </div>
        <div className="content"></div>
        
        <div onClick={() => this.state.NavigationViewer.popFromNavigationStack()}><div className= "back-button"></div></div>
        <div className="screen-number"><p>1/1</p></div>
        </div>
      );
    }
  }
  
  export default Resume;