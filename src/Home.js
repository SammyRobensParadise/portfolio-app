import React, {
  Component
} from 'react';
import HomeImage from './sub_components/HomeImage';
import './styles/Home.scss';
import './styles/Navigation.scss';
import anime from 'animejs';
import Button from './sub_components/Button';
import NavigationHandler from './NavigationHandler';
import App from './App';
import Work from './Work';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRendered: false,
      NavigationViewer: new NavigationHandler()
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
      <div className="navigation-bar">
      <ul>
      <li className="home" onClick={() => this.state.NavigationViewer.pushToNavigationStack(Home)}><span className="navigation">R. Paradise</span></li>
      <li className="work" onClick={() => this.state.NavigationViewer.pushToNavigationStack(Work)}><span className="navigation">Work</span></li>
      <li className="about"><span className="navigation">About</span></li>
       </ul>
       </div>
      <div className="content">

      <p className="line-1 anim-typewriter">I am an inspired developer, UX designer artist, and student.</p>
      </div>
      <HomeImage className="home-image-target" />
      {console.log("Home is in render")}
      <div><div className= "more-button"></div></div>
      </div>
    );
  }
}

export default Home;