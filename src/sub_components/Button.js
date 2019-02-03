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
import NavigationHandler from '../NavigationHandler';
import ButtonManifest from './ButtonManifest';

//manifestimport
import { homeButtonStructure } from './ButtonManifest';


class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRendered: false,
      currentButtonView: props.currentView,
    }

  }

  _getRenderedState = () => {
    return this.state.isRendered;
  }
  componentDidMount() {
    return true;
  }
  componentDidUpdate() {

    return true;
  }
  render(props) {
    let manifestObj = new ButtonManifest()
    if (this.state.currentButtonView === Home){
   return (
      <div className="buttons">
      <div className="buttons-inner">
        <manifestObj.homeButtonStructure/>
      </div>
      </div>
    );
  }
}
}


export default Navigation;