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

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRendered: false,
      currentButtonView: props.currentView,
      manifestObj: new ButtonManifest()

    }

  }

  _getRenderedState = () => {
    return this.state.isRendered;
  }
  componentDidMount() {
    console.log("Navigation::componentdidMount()")
    return true;
  }
  componentDidUpdate() {
    return true;
  }
  render(props) {
    if (this.props.currentView === Home){
   return (
      <div className="buttons">
      <div className="buttons-inner">
        <this.state.manifestObj.homeButtonStructure/>
      </div>
      </div>
    );
  }
}
}


export default Navigation;