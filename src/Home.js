import React, {
  Component
} from 'react';
import HomeImage from './sub_components/HomeImage';
import './styles/Home.scss';
import './styles/Navigation.scss';
import anime from 'animejs';
import NavigationHandler, { ScreenEnum } from './NavigationHandler';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import App from './App';
//import Work from './Work';
//import About from './About';
//import Feature from './Feature';


class Home extends Component {
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
      <Router>
        <Link to="/">
      <div className="Home">
      <div className="navigation-bar">
      <ul>
      <li className="home" onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Home)}><span className="navigation">R. Paradise</span></li>
      <li className="work" onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Work)}><span className="navigation">Work</span></li>
      <li className="about" onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.About)}><span className="navigation">About</span></li>
       </ul>
       </div>
      <div className="content">

      <p className="line-1 anim-typewriter">I am an inspired developer, UX designer, artist, and student.</p>
      </div>
      <div className="hidden-base-64"><p>UGxlYXNlIEhpcmUgTWUh</p></div>
  
      <HomeImage className="home-image-target" />
      
      <div className="Policy-Redirect" onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Policy)}>
      <Link to="/policy">policy</Link>
      </div>
      <div onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Feature)}><div className= "more-button"><div className="glow-button-inner"></div></div></div>
      <div className="screen-number"><p>1/1</p></div>
      </div>
      </Link>
      </Router>

    );
  }
}

export default Home;