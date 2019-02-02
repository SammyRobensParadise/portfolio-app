import React, {
  Component
} from 'react';
//CSS import -----------------------------
import './styles/App.css';

//Component import -----------------------
import Home from './Home';
import About from './About';
import Work from './Work';
import Feature from './Feature';

//Loading and Buffering Component import -
import Loading from './Loading';
import Welcome from './Welcome';
import Navigation from './sub_components/Button';
import Buffer from './Buffer';

//Buttons anf Features
import Socials from './sub_components/Socials';

//Library import -------------------------
import anime from 'animejs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      unWelcome: true,
      onboardComplete: false,
      screenClick: 0,
      screenViewer: null
    };
  }

  //Definitions ------------------------------

  componentDidMount(props) {
    setTimeout(() => this.setState({
      isLoading: false
    }), 3000);
  }

  componentDidUpdate(props) {
    if (!props.onboardComplete) {
      setTimeout(() => this.setState({
        unWelcome: false,
        onboardComplete: true
      }), 9000);
    }
  }

  pushComponents = (component) => {
    this.setState(prevState => ({
      components: [...prevState.components, component]
    }));
  }
  _getCurrentStack = (props) => {
    return (this.state.components.length - 1);
  }
  _registerClicks = () => {
    let current = this.state.screenClick;
    this.setState({
      screenClick: current + 1
    });
  }

//Render: Sent to Browser -------------------
  render(props) {
    if(this.state.isLoading){
      return <Loading/>;
    }
    if(!this.state.isLoading && this.state.unWelcome){
      return <Welcome/>;
    }
    if(this.state.onboardComplete){
    return (
      <div className="App">
      <div className="click-target" onClick={this._registerClicks}>
      <Home/>
      </div>
      <Socials currentClickCount={this.state.screenClick}/>
      </div>
    );
    }
  }
}
 
export default App;
