import React, {
  Component
} from 'react';
import NavigationHandler, { ScreenEnum } from './NavigationHandler';
import classnames from "classnames";
import ScrollHandler, {scrollBool} from './ScrollHandler';
import './styles/AboutTwo.scss';
import './styles/Navigation.scss';
import anime from 'animejs';
//import AboutThree from './AboutThree';
//import Home from './Home';

class AboutTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isRendered: false,
      NavigationViewer: new NavigationHandler(),
      ScrollObj: new ScrollHandler()
    }
  }
  componentDidCatch(error, info) {
    console.log(error, info);
    this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Home);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
    let thisPage = {
      name: "education"
    };
    window.history.pushState(thisPage, "education", "education");
    this.setState({
      _isRendered: true
    });
    setTimeout(() => {
      this.animateImageAppear()
    }, 700);
    setTimeout(() => {
      this.animateGlow()
    }, 10000)
  }
  
  componentWillUnmount(){
    window.removeEventListener("scroll",this.scrollHandler);
  }
  scrollHandler = () => {
    this.state.ScrollObj.handleScroll(window.pageYOffset);
  }

  animateImageAppear = () => {
    anime({
      targets: '.waterloo-background',
      duration: 600,
      opacity: [0, 1],
      easing: 'easeInExpo'
    })
  }
  animateGlow = () => {
    anime({
      targets: '.glow-button-inner-horizontal',
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
      <div className="About-two">
        <div className="navigation-bar">
          <ul>
            <li className="home" onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Home)}><span className="navigation">Start Over...</span></li>
          </ul>
        </div>
        <div className="row">
          <div className="col-header">
            <div className="about-two-title">Education</div>
          </div>
        </div>
        <div className="row">
        <div className="col-edu-main">
        <div className="background-parent-about-two">
        <div className="waterloo-grad-year"><span>2017-2023</span></div>
          <div className="waterloo-background"></div>
          <div className="the-about-systems-header"><span>Systems Design Engineering, The university of Waterloo</span></div>
          <div className="the-description-text-education-one"><p>As someone who advocates optimized engineering solutions,
            I continue on my journey to find the most eloquent and beautiful solutions to the worlds most challening problems.
            I have always taken an interest in the way humans interact with technology, and more specifically,
            the way it shapes our experiences. I chose to study Systems Design Engineering because of my
            fascination with the way one user's experience of a product or service can shape their understanding of the world,
        and more specifically, the unique impact of that understanding.</p></div>
          
        </div>
        </div>
        </div>

        <div onClick={() => this.state.NavigationViewer.popFromNavigationStack()}><div className="back-button"></div></div>
        <div onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.AboutThree)}><div className="next-button"><div className="glow-button-inner-horizontal"></div></div></div>
        <div className="screen-number"><p>2/3</p></div>
      </div>
    );
  }
}

export default AboutTwo;