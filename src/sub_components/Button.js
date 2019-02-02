import React, {
  Component
} from 'react';
import '../styles/Navigation.scss';
import anime from 'animejs';
//Component import -----------------------

import Home from '../Home';
import About from '../About';
import Work from '../Work';
import Feature from '../Feature';

//manifestimport
import { homeButtonStructure } from './ButtonManifest';


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
    if (this.state.home._getRenderStatus()) {
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
   return (
      <div className="buttons">
      <div className="buttons-inner">
        {homeButtonStructure}
      </div>
      </div>
    );
  }
}


export default Navigation;