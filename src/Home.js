import React, {
  Component
} from 'react';
import HomeImage from './sub_components/HomeImage';
import './styles/Home.scss';
import './styles/Navigation.scss';
import anime from 'animejs';
import NavigationHandler from './NavigationHandler';
import App from './App';
import Work from './Work';
import About from './About';
import Feature from './Feature';

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
  //ANIMATIONS REQUIRED
  render() {
    return (
      <div className="Home">
      <div className="navigation-bar">
      <ul>
      <li className="home" onClick={() => this.state.NavigationViewer.pushToNavigationStack(Home)}><span className="navigation">R. Paradise</span></li>
      <li className="work" onClick={() => this.state.NavigationViewer.pushToNavigationStack(Work)}><span className="navigation">Work</span></li>
      <li className="about" onClick={() => this.state.NavigationViewer.pushToNavigationStack(About)}><span className="navigation">About</span></li>
       </ul>
       </div>
      <div className="content">

      <p className="line-1 anim-typewriter">I am an inspired developer, UX designer artist, and student.</p>
      </div>
      <HomeImage className="home-image-target" />
      {console.log("Home is in render")}
      <div onClick={() => this.state.NavigationViewer.pushToNavigationStack(Feature)}><div className= "more-button"></div></div>
      </div>
    );
  }
}

export default Home;