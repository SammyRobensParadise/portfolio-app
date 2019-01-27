import React, { Component } from 'react';
import HomeImage from './sub_components/HomeImage';
import './Home.css';
import anime from 'animejs';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      isRendered: false
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({isRendered: true});
    },500);
  }
  render() {
    return (
      <div className="Home">
      <HomeImage className="home-image-target" />
      </div>
    );
  }
}

export default Home;