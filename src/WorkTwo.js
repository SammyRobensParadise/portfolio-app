import React, {
  Component
} from 'react';
import anime from 'animejs';
import NavigationHandler, { ScreenEnum } from './NavigationHandler';
import './styles/WorkOne.scss';
import './styles/Navigation.scss';
import './styles/WorkTwo.scss';

class WorkTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isRendered: false,
      NavigationViewer: new NavigationHandler()
    }
  }
  componentDidCatch(error, info) {
    console.log(error, info);
    this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Home);
  }
  componentDidMount() {
    this.setState({
      _isRendered: true
    });
    setTimeout(() => {
      this.animateImageAppear()
    }, 1500);
    setTimeout(() => {
      this.animateGlow()
    }, 10000)
  }
  animateImageAppear = () => {
    anime({
      targets: '.peace-tower-background',
      duration: 1000,
      opacity: [0, 1],
      easing: 'easeInExpo'
    })
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
  render() {
    return (
      <div className="work-two">
      <div className="navigation-bar">
      <ul>
      <li className="home" onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Home)}><span className="navigation">Start Over...</span></li>
       </ul>
       </div>
      <div className="worktwo-title">Work</div>
      <div className="canada-gov-logo"></div>
      <div className="the-description-text-gov"><p>As a Software Engineering Student working with Environment and Climate Change Canada's 
          Transportation Division to aid in the development of various software engineering solutions; the backbone of regulatory compliance.</p></div>
        <div className="the-role-header-gov"><span>Role:</span></div>
        <div className="the-job-header-gov"><span>Software Engineering Co-op</span></div>
        <div className="gov-job-details-button"><div className="details-btn-text">Details...</div></div>
        <div className="tower-parent">
        <div className="peace-tower-background"></div>
        </div>
        <div onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.About)}><div className= "more-button"><div className="glow-button-inner"></div></div></div>
        <div onClick={() => this.state.NavigationViewer.popFromNavigationStack()}><div className= "back-button"></div></div>
        <div className="screen-number"><p>2/2</p></div>
      </div>
    );
  }
}

export default WorkTwo;