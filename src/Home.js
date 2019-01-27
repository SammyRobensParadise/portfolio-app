import React, { Component } from 'react';
import HomeImage from './sub_components/HomeImage';
import './Home.css';
import anime from 'animejs';

class Home extends Component {
  render() {
    return (
      <div className="Home">
      <HomeImage/>
      </div>
    );
  }
}

export default Home;