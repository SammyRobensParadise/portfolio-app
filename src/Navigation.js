import React, { Component } from 'react';
import {Container,Col,Row} from 'reactstrap';
import './styles/Navigation.scss';
import anime from 'animejs';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation-bar">
      <Container>
        <Col>
        <Row>
      <ul>
  <li className="home"><span className="navigation">R. Paradise</span></li>
  <li className="work"><span className="navigation">Work</span></li>
  <li className="about"><span className="navigation">About</span></li>
      </ul>
      </Row>
        </Col>
      </Container>
      </div>
    );
  }
}

export default Navigation;