import React, {
  Component
} from 'react';
import {
  instanceOf
} from 'prop-types';
import {
  withCookies,
  Cookies
} from 'react-cookie';
//CSS import -----------------------------
import './styles/App.css';

//Component import -----------------------
import NavigationHandler, {
  ScreenEnum
} from './NavigationHandler';

//Loading and Buffering Component import -
import Loading from './Loading';
import Welcome from './Welcome';

//Buttons anf Features
import Socials from './sub_components/Socials';
import CookieBar from './sub_components/Cookie';

//Library import -------------------------
import anime from 'animejs';


class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props) {
    super(props);
    const {
      cookies
    } = props;
    this.state = {
      isLoading: true,
      unWelcome: true,
      onboardComplete: false,
      screenClick: 0,
      screenViewer: new NavigationHandler(),
      HasError: false,
      cookieIndex: cookies.get('cookieIndex') || false
    };
  }

  //Definitions ------------------------------
  componentDidCatch(error, info) {
    this.setState({
      HasError: true
    })
    console.log(error, info);
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      isLoading: false,
    }), 3000);
    if (window.location.href.includes("policy")) {
      this.state.screenViewer.pushToNavigationStack(ScreenEnum.Home)
      setTimeout(() => {
        this.state.screenViewer.pushToNavigationStack(ScreenEnum.Policy)
      }, 100)
    } else {
      this.state.screenViewer.pushToNavigationStack(ScreenEnum.Home);
    }
    console.log("Coded & Designed with ❤️ by Sammy Robens-Paradise;", "☕,🥑, and 🍌 were harmed in the making of this web app (sorry)");
  }
  handleCookieUpdate = (e) => {
    const {
      cookies
    } = this.props;
    cookies.set('cookieIndex', e, {
      path: '/'
    });
  }
  componentDidUpdate(props) {
    if (!props.onboardComplete) {
      setTimeout(() => {
        this.setState({
          unWelcome: false,
          onboardComplete: true
        });
      }, 9000);
    }
  }
  componentWillUnmount() {}

  _registerClicks = () => {
    let current = this.state.screenClick;
    this.setState({
      screenClick: current + 1
    });
    console.log(this.state.screenClick);
    if (this.state.screenClick < 1) {
      this.handleCookieUpdate(true);
    }
  }
  forceUpdate() {

  }
//Render: Sent to Browser -------------------

  render(props) {
    if(this.state.HasError){
      return <h1><span>Oops! It looks like something has gone wrong in our codebase. Come back in a bit when the problem is fixed!</span></h1>
    }
    if(this.state.isLoading){
      return( <div><Loading/></div>);
    }
    if(!this.state.isLoading && this.state.unWelcome){
      return <div><Welcome/></div> ;
    }
    if(this.state.onboardComplete && !this.state.cookieIndex){
    return (
      <div className="App">
      <div className="click-target" onClick={this._registerClicks}>
     < this.state.screenViewer._getCurrentView />
      </div>
      <Socials currentClickCount={this.state.screenClick}/>
      </div>
    );
    }
    if(this.state.onboardComplete && this.state.cookieIndex){
      return (
        <div className="App">
        <div className="click-target" onClick={this._registerClicks}>
       < this.state.screenViewer._getCurrentView />
        </div>
        <Socials currentClickCount={this.state.screenClick}/>
        < CookieBar />
        </div>
          

      );
    }
  }
}
 
export default withCookies(App);
