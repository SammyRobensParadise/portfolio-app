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
import NavigationHandler from './NavigationHandler';
import ButtonManifest from './sub_components/ButtonManifest'

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
      screenViewer: new NavigationHandler(),
      ButtonHandler: new ButtonManifest(),
      HomeRef: new Home(),
      HasError: false,
    };
  }

  //Definitions ------------------------------
componentDidCatch(error, info){
  this.setState({ HasError: true})
  console.log(error,info);
}

  componentDidMount() {
    console.log(" App::componentdidmount()")
    setTimeout(() => this.setState({
      isLoading: false,
    }), 3000);
    this.state.screenViewer.pushToNavigationStack(Home);
  }

  componentDidUpdate(props) {
    if (!props.onboardComplete) {
      setTimeout(() => {this.setState({
        unWelcome: false,
        onboardComplete: true
      });
    },9000);
    }
  }

  _registerClicks = () => {
    let current = this.state.screenClick;
    this.setState({
      screenClick: current + 1
    });
  }

//Render: Sent to Browser -------------------
  render(props) {
    if(this.state.HasError){
      return <p>Oops! It looks like something has gone wrong in our codebase. Come back in a bit to see if the problem is fixed!</p>
    }
    if(this.state.isLoading){
      return( <div><Loading/><NavigationHandler/></div>);
    }
    if(!this.state.isLoading && this.state.unWelcome){
      return <div><Welcome/><NavigationHandler/></div> ;
    }
    if(this.state.onboardComplete){
    return (
      <div className="App">
      <div className="click-target" onClick={this._registerClicks}>
      < this.state.screenViewer._getCurrentView />
      </div>
      <Socials currentClickCount={this.state.screenClick}/>
      <NavigationHandler/>
      </div>
    );
    }
  }
}
 
export default App;
