import React, { Component } from 'react';
import './styles/Navigation.scss';
import anime from 'animejs';

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      isRendered: false
    }
  }
  render(props) {
    var homepageNav = <div><div className= "more-button"></div></div>;
    var obj = Navigation;
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