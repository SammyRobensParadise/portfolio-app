import React, { Component } from 'react';
import HomeImage from './sub_components/HomeImage';
import './styles/Home.scss';
import anime from 'animejs';
import { Container, Row, Col } from 'reactstrap';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      isRendered: false,
      name: Home
    }
  }
  componentDidMount(){
      this.setState({isRendered: true});
  }
  componentDidUpdate(){
    return true;
  }
  _getRenderStatus = () => {
    return this.state.isRendered;
  }
  _getClass = () => {
    return this.state.name;
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