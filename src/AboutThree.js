import React, {
  Component
} from 'react';
import NavigationHandler, { ScreenEnum } from './NavigationHandler';
import classnames from "classnames";
import ScrollHandler, { scrollBool } from './ScrollHandler';
import './styles/AboutThree.scss';
import './styles/Navigation.scss';
import anime from 'animejs';

class AboutThree extends Component {
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
    window.addEventListener("popstate", this.popHandler);
    let thisPage = {
      name: "toolbox"
    };
    window.history.pushState(thisPage, "toolbox", "toolbox");
    this.setState({
      _isRendered: true
    });
    setTimeout(() => {
      this.animateImageAppear()
    }, 500);
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
        <div className="row">
          <div className="col-header">
            <div className="about-three-title">Toolbox</div>
          </div>
        </div>
        <div className="row">
          <div className="about-3-col-main">
            <div className="background-parent-about-three">
              <div className="toolkit-background"></div>
            </div>
          </div>
        </div>
        <div className="background-parent-about-three">
          <div className="toolkit-background"></div>
        </div>
        <div className={classnames("nav-el", {
          "navigation-hidden": !this.state.navButtonsVisible
        })}>
          <div onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.AboutTwo)}><div className="back-button"></div></div>
        </div>
        <div className="screen-number"><p>3/3</p></div>
      </div>
    );
  }
}

export default AboutThree;