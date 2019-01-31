import React, { Component } from 'react';
import HomeImage from './sub_components/HomeImage';
import './styles/Home.scss';
import anime from 'animejs';
import { Container, Row, Col } from 'reactstrap';

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
      <Container>
      <div className="content">
      <p className="line-1 anim-typewriter">I am an inspired developer, UX designer artist, and student.</p>
      </div>
      <HomeImage className="home-image-target" />
      </Container>
      </div>
    );
  }
}

export default Home;