import React, {
  Component
} from 'react';
import NavigationHandler, { ScreenEnum } from './NavigationHandler';
import './styles/AboutThree.scss';
import './styles/Navigation.scss';
import anime from 'animejs';

class AboutThree extends Component {
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
    }, 1000);
  }
  animateImageAppear = () => {
    anime({
      targets: '.toolkit-background',
      duration: 700,
      opacity: [0, 1],
      easing: 'easeInExpo'
    })
  }
  render() {
    //ANIMATIONS REQUIRED
    return (
      <div className="About-three">
      <div className="navigation-bar">
      <ul>
      <li className="home" onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Home)}><span className="navigation">Start Over...</span></li>
       </ul>
       </div>
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