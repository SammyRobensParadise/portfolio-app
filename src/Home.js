import React, {
  Component
} from 'react';
import HomeImage from './sub_components/HomeImage';
import './styles/Home.scss';
import anime from 'animejs';
import Button from './sub_components/Button';
import NavigationHandler from './NavigationHandler';
import App from './App';
import Navigation from './sub_components/Button';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRendered: false,
      classRef: Home
    }
  }
  componentDidCatch(error,info){
    console.log(error,info);
  }
  componentDidMount() {
    this.setState({
      isRendered: true
    });
    console.log("Home::compondentDidMount()");
    return true;
  }
  componentDidUpdate() {
    return true;
  }
  render() {
    return (
      <div className="Home">
      <div className="content">
      <p className="line-1 anim-typewriter">I am an inspired developer, UX designer artist, and student.</p>
      </div>
      <HomeImage className="home-image-target" />
      <Navigation currentView={this.state.classRef}/>
      </div>
    );
  }
}

export default Home;