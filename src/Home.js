import React, { Component } from 'react';
import HomeImage from './sub_components/HomeImage';
import './styles/Home.css';
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
      <HomeImage className="home-image-target" />
      </Container>
      </div>
    );
  }
}

export default Home;