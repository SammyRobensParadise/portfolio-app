import React, { Component } from 'react';
import './styles/Feature.scss';
import anime from 'animejs';
import fullWebpage from './img/Combined.png';

class Feature extends Component {
  render() {
    return (
      <div className="Feature">
      <div className="screen-1">
      <img className="combined-web-img" src={fullWebpage} alt="full webpage of Emily Bandel's website"></img>
      </div>
      <div className="screen-2"></div>
      <div className="screen-3"></div> 
      <p>sample</p>
      </div>
    );
  }
}

export default Feature;