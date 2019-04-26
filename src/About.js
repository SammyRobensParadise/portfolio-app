import React, {
  Component
} from 'react';
import NavigationHandler, { ScreenEnum } from './NavigationHandler';
import classnames from "classnames";
import ScrollHandler, {scrollBool} from './ScrollHandler';
import './styles/AboutOne.scss';
import './styles/Navigation.scss';

import anime from 'animejs';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isRendered: false,
      NavigationViewer: new NavigationHandler(),
      navButtonsVisible: true,
      ScrollObj: new ScrollHandler()
    }
  }
  componentDidCatch(error, info, ) {
    console.log(error, info);
    this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Home);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
    window.addEventListener("popstate", this.popHandler);
    let thisPage = {
      name: "about"
    };
    window.history.pushState(thisPage, "about", "about");
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

  componentWillUnmount(){
    window.removeEventListener("scroll",this.scrollHandler);
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
      targets: '.west-coast-background',
      duration: 1000,
      opacity: [0, 1],
      easing: 'easeInCubic'
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
    //ANIMATIONS REQUIRED
    return (
      <div className="About-one">
        <div className="navigation-bar">
          <ul>
            <li className="home" onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Home)}><span className="navigation">Start Over...</span></li>
          </ul>
        </div>
        <div className="row">
          <div className="col-header">
            <div className="aboutone-title">About</div>
            <div className="the-name-header"><span>Sammy Robens-Paradise</span></div>
          </div>
        </div>
        <div className="row">
          <div className="col-1-top"></div>
          <div className="col-2-top">
            <div className="the-description-text-about-one-higher"><p>Through my exposure to, and interest in software,
               as well as my personal persuit of web development I found a keen interest in the connection
        between a user's experience and the interface that is presented to that user</p></div>
            <div className="hidden-base-64-about"><p>V2VzdCBDb2FzdCBLaWQu</p></div>
          </div>
          <div className="col-3-top"></div>
          <div className="col-4-top">
            <div className="vertical-text">
              <div className="waterloo-text"><p>Waterloo Ontario</p></div>
              <div className="vancouver-text">Vancouver BC</div>
            </div>
          </div>
          <div className="col-5-top"></div>
          <div className="row">
            <div className="col-bottom">
              <div className="background-parent">
                <div className="west-coast-background">
                  <div className="the-description-text-about-one"><p>As someone who advocates optimized engineering solutions,
                    I continue on my journey to find the most eloquent and beautiful solutions to the worlds most challening problems.
                    I have always taken an interest in the way humans interact with technology, and more specifically,
                    the way it shapes our experiences. I chose to study Systems Design Engineering because of my
                    fascination with the way one user's experience of a product or service can shape their understanding of the world,
        and more specifically, the unique impact of that understanding.</p></div></div>
              </div>
            </div>
          </div>
        </div>
        <div className={classnames("nav-el", {
            "navigation-hidden": !this.state.navButtonsVisible
          })}>
        <div onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.WorkTwo)}><div className="back-button"></div></div>
        <div onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.AboutTwo)}><div className="next-button"><div className="glow-button-inner-horizontal"></div></div></div>
        </div>
        <div className="screen-number"><p>1/3</p></div>
      </div>
    );
  }
}

export default About;