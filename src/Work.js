import React, {
  Component
} from 'react';
import anime from 'animejs';
import NavigationHandler, { ScreenEnum } from './NavigationHandler';
import { BrowserRouter as Router } from "react-router-dom";
import classnames from "classnames";
import './styles/WorkOne.scss';
import './styles/Navigation.scss';
import ffLogo from './img/ff_logo_red_.png';
import krogerLogo from './img/Current_Kroger_logo.png';
import spheroLogo from './img/sphero2x.png';
import luluLogo from './img/lulu@2x.png';
import ScrollHandler, { scrollBool } from './ScrollHandler';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isRendered: false,
      NavigationViewer: new NavigationHandler(),
      prevScrollPos: window.pageYOffset,
      navButtonsVisible: true,
      ScrollObj: new ScrollHandler()
    }
  }
  componentDidCatch(error, info) {
    console.log(error, info);
    this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Home);
  }
  componentDidMount(props) {
    window.addEventListener("scroll", this.scrollHandler);
    window.addEventListener("popstate", this.popHandler);
    let thisPage = {
      name: "fingerfoods"
    };
    window.history.pushState(thisPage, "fingerfoods", "fingerfoods");
    this.setState({
      _isRendered: true
    });
    setTimeout(() => {
      this.animateImageAppear()
    }, 1000);
    setTimeout(() => {
      this.animateGlow()
    }, 10000)

  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
    window.removeEventListener("popstate", this.popHandler);
  }
  scrollHandler = () => {
    this.state.ScrollObj.handleScroll(window.pageYOffset);
    this.setState({
      navButtonsVisible: scrollBool
    })
  }
  popHandler = () => {
    this.state.NavigationViewer.popFromNavigationStack();
  }
  animateImageAppear = () => {
    anime({
      targets: '.ff-logo-img',
      duration: 1000,
      opacity: [0, 1],
      easing: 'linear'
    })
    anime({
      targets: '.lulu-logo',
      duration: 1000,
      opacity: [0, 1],
      easing: 'linear',
      delay: 500
    })
    anime({
      targets: '.kroger-logo',
      duration: 1000,
      opacity: [0, 1],
      easing: 'linear',
      delay: 1000
    })
    anime({
      targets: '.sphero-logo',
      duration: 1000,
      opacity: [0, 1],
      easing: 'linear',
      delay: 1500
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
  render(props) {
    return (
      <Router>
        <div className="work-one">
          <div className="navigation-bar">
            <ul>
              <li className="home" onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Home)}><span className="navigation">Start Over...</span></li>
            </ul>
          </div>
          <div className="row">
            <div className="col-header">
              <div className="work-title">Work</div>
            </div>
          </div>
          <div className="row">
            <div className="work-1-left"></div>
            <div className="work-1-left-center">
              <div className="the-description-text"><p>I worked to quantify and evaluate bleeding edge tech solutions for some of our industry's most challenging problems.
        I leverage analytics and user experience data to ship game changing products of every shape and size.</p>
              </div>
              <div className="the-role-header"><span>Role:</span></div>
              <div className="the-job-header"><div className="job-title"></div><span >QA Lead &#38; Analytics developer</span></div>
              <div className="ff-job-details-button"><a href="https://www.fingerfoodstudios.com/" target="_blank" rel="noopener noreferrer">
                <div className="details-btn-text">Details...</div></a>
              </div>
              <div className="projects-header"><span>Disclosable Projects:</span></div>
            </div>
            <div className="work-1-right-center">
              <div className="ff_logo">
                <img className="ff-logo-img" src={ffLogo} alt="finger food logo"></img>
              </div>
            </div>
            <div className="work-1-right"></div>
          </div>
          <div className="row">
            <div className="col-1-lower"><img className="lulu-logo" src={luluLogo} alt="Lululemon"></img></div>
            <div className="col-2-lower"><img className="kroger-logo" src={krogerLogo} alt="Kroger"></img></div>
            <div className="col-3-lower"><img className="sphero-logo" src={spheroLogo} alt="sphero"></img></div>
          </div>
          <div className={classnames("nav-el", {
            "navigation-hidden": !this.state.navButtonsVisible
          })}>
            <div onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.About)}><div className="more-button"></div></div>
            <div onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Home)}><div className="back-button"></div></div>
            <div onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.WorkTwo)}><div className="next-button"><div className="glow-button-inner-horizontal"></div></div></div>
          </div>
          <div className="screen-number"><p>1/2</p></div>
        </div>
      </Router>
    );
  }
}

export default Work;