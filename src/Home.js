import React, {
  Component
} from 'react';
import HomeImage from './sub_components/HomeImage';
import './styles/Home.scss';
import './styles/Navigation.scss';
import anime from 'animejs';
import NavigationHandler, { ScreenEnum } from './NavigationHandler';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRendered: false,
      onBoardingComplete: false,
      NavigationViewer: new NavigationHandler(),
    }
  }
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  componentDidMount() {
    let thisPage = {
      name: "home"
    };
    window.history.pushState(thisPage, "home", "home");
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
  _getOnboardStatus = () => {
    return this.state.onBoardingComplete;
  }
  //ANIMATIONS REQUIRED
  render() {
    return (
      <Router>
        <Link to="/Home">
          <div className="Home">
            <div className="navigation-bar">
              <ul>
                <li className="home" onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Home)}><span className="navigation">R. Paradise</span></li>
                <li className="work" onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Work)}><span className="navigation">Work</span></li>
                <li className="about" onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.About)}><span className="navigation">About</span></li>
              </ul>
            </div>
            <div className="row">
              <div className="col-left">
                <div className="hidden-base-64"><p>UGxlYXNlIEhpcmUgTWUh</p></div>
              </div>
              <div className="col-middle">
                <p className="line-1 anim-typewriter">I am an inspired developer, UX designer, artist, and student.</p>
                <HomeImage className="home-image-target" />
              </div>
              <div className="col-right">
                <div className="Policy-Redirect" onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Policy)}>
                  <Link to="/policy"><p>Policy</p></Link>
                </div>
              </div>
            </div>
            <div onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Work)}><Link to="/fingerfoods"><div className="more-button"><div className="glow-button-inner"></div></div></Link></div>
            <div className="screen-number"><p>1/1</p></div>
          </div>
        </Link>
      </Router>

    );
  }
}

export default Home;