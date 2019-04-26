import React, {
  Component
} from 'react';
import anime from 'animejs';
import NavigationHandler, { ScreenEnum } from './NavigationHandler';
import ScrollHandler, {scrollBool} from './ScrollHandler';
import classnames from "classnames";
import './styles/WorkOne.scss';
import './styles/Navigation.scss';
import './styles/WorkTwo.scss';

class WorkTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isRendered: false,
      NavigationViewer: new NavigationHandler(),
      navButtonsVisible: true,
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
      name: "government"
    };
    window.history.pushState(thisPage, "government", "government");
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
    this.setState({
      navButtonsVisible: scrollBool
    })
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
        <div className="row">
          <div className="col-header">
            <div className="worktwo-title">Work</div>
          </div>
        </div>
        <div className="row">
          <div className="canada-logo-col">
            <div className="canada-gov-logo"></div>
          </div>
        </div>
        <div className="row">
          <div className="work-2-left"></div>
          <div className="work-2-left-center">
            <div className="the-role-header-gov"><span>Role:</span></div>
            <div className="the-job-header-gov"><span>Software Engineering Co-op</span></div>
          </div>
          <div className="work-2-right-center">
            <div className="the-description-text-gov"><p className="paragraph-gov">As a Software Engineering Student working with Environment and Climate Change Canada's
          Transportation Division to aid in the development of various software engineering solutions; the backbone of regulatory compliance.</p></div>
            <div className="gov-job-details-button"><a href="https://pollution-waste.canada.ca/environmental-protection-registry/regulations/view?Id=46" target="_blank" rel="noopener noreferrer"><div className="details-btn-text">Details...</div></a></div>
            </div>
          <div className="work-2-right">
          </div>
        </div>
        <div className="row">
          <div className="peace-tower-col">
            <div className="tower-parent">
              <div className="peace-tower-background"></div>
            </div>
          </div>
        </div>
        <div className={classnames("nav-el", {
            "navigation-hidden": !this.state.navButtonsVisible
          })}>
        <div onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.About)}><div className="more-button"><div className="glow-button-inner"></div></div></div>
        <div onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Work)}><div className="back-button"></div></div>
        </div>
        <div className="screen-number"><p>2/2</p></div>
      </div>
    );
  }
}

export default WorkTwo;