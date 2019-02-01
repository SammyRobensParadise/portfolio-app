import React, {
  Component
} from 'react';
import './styles/Navigation.scss';
import anime from 'animejs';
//Component import -----------------------

import Home from './Home';
import About from './About';
import Work from './Work';
import Feature from './Feature';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRendered: false,
      navigation: [
        null
      ],
      home: new Home(),
      about: new About(),
      work: new Work(),
      Feature: new Feature()
    }

  }

  _getRenderedState = () => {
    return this.state.isRendered;
  }
  componentDidMount() {
    return true;
  }
  componentDidUpdate() {
    if (this.state.home.componentDidUpdate()) {
      this.pushHome();
    }
    return true;
  }
  pushHome = () => {
    console.log(this.state.home._getClass());
    if (this.state.home._getRenderStatus()) {
      this.pushToNavigationStack(this.state.home._getClass());
    }
  }
  pushToNavigationStack = (screen) => {
    setTimeout((screen) => {
      this.setState(prevState => ({
        navigation: [...prevState.navigation, screen]
      }))
      console.log("stack update: " + this.state.navigation[1]);
    }, 10);
  }
  render(props) {

    var homepageNav = <div><div className= "more-button"></div></div>;
    return (
      <div className="navigation-module">
      <div className="navigation-bar">
      <ul>
  <li className="home"><span className="navigation">R. Paradise</span></li>
  <li className="work"><span className="navigation">Work</span></li>
  <li className="about"><span className="navigation">About</span></li>
      </ul>
      </div>
      {homepageNav}
      </div>
    );
  }
}


export default Navigation;