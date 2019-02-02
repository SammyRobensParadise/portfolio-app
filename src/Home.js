import React, {
  Component
} from 'react';
import HomeImage from './sub_components/HomeImage';
import './styles/Home.scss';
import anime from 'animejs';
import Button from './sub_components/Button';
import NavigationHandler from './NavigationHandler';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRendered: false,
      classRef: Home,
      navRef: new NavigationHandler(Home)
    }
  }
  componentDidMount() {
    this.setState({
      isRendered: true
    });
  }
  componentDidUpdate() {
    return true;
  }
  _getRenderStatus = () => {
    return this.state.isRendered;
  }
  _getRenderScreen = () => {
    return <Home />;
  }
  render() {
    return (
      <div className="Home">
      <div className="content">
      <p className="line-1 anim-typewriter">I am an inspired developer, UX designer artist, and student.</p>
      </div>
      <HomeImage className="home-image-target" />
      <Button currentView={this.state.classRef}/>
      {console.log("in home:"+this.state.classRef)}
      </div>
    );
  }
}

export default Home;