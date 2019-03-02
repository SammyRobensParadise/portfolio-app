import React, {
  Component
} from 'react';
import './styles/Feature.scss';
import './styles/Navigation.scss';
import anime from 'animejs';
import fullWebpage from './img/Combined.png';
import landingPageImage from './img/LandingPage.png';
import TwitterLogo from './img/Emily_Bandel_Twitter.png';
import NavigationHandler, { ScreenEnum } from './NavigationHandler';

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRendered: false,
      NavigationViewer: new NavigationHandler()
    }
  }

  componentDidCatch(error, info) {
    console.log(error, info);
    this.state.NavigationHandler.pushToNavigationStack(ScreenEnum.Home);
  }
  componentDidMount() {
    this.setState({
      isRendered: true
    });
    setTimeout(() => {
      this.animateImageAppear()
    }, 1500);
    setTimeout(() => {
      this.animateGlow()
    }, 10000)

    return true;
  }
  animateImageAppear = () => {
    anime({
      targets: '.emily-twitter-photo',
      duration: 1000,
      opacity: [0, 1],
      easing: 'linear'
    })
    anime({
      targets: '.combined-web-img',
      duration: 1000,
      opacity: [0, 1],
      easing: 'linear',
      delay: 500
    })
  }
  animateGlow = () => {
    anime({
      targets: '.glow-button-inner',
      direction: 'alternate',
      loop: true,
      easing: 'linear',
      duration: 2500,
      borderRadius: ['25%', '35%'],
      boxShadow: [' inset 0rem 0rem 0rem 0rem #450092', ' inset 0rem 0rem 2rem 0.1rem #450092']
    })
  }
  

  //AN
  //ANIMATIONS REQUIRED
  render() {
    return (
      <div className="Feature">
      <div className="navigation-bar">
      <ul>
      <li className="home" onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Home)}><span className="navigation">Start Over...</span></li>
       </ul>
       </div>
      <div className="screen-1">
      <div className="feature-title">Feature Project</div>
      <div className="definition-text">
      <div className="the-problem-header"><span>The Problem</span></div>
      <div className="the-problem-text"><p>Emily Bandel, and Actress based in Vancouver and California, with features on Sabrina, Standing Room Only, and A Twisted Fate; was looking for a way to show her talent and uniqueness to a growing audinace.
       Emily was having trouble expressing what made her, <b>her</b> on traditional platforms such as social media.</p></div>
      <div className="the-solution-header"><span>The Solution</span></div>
      <div className="the-solution-text"><p>Emily Bandel comissioned me to create her own platform where audiences could gather an individualistic and holostic understanding of Emily. 
      The design went through three iterations and everything from color patterns to content was build with Emily in mind. 
      I was able to take  the project from wireframes and client meetings to beautiful code, constructed in React.js. 
      Needless to say, Emily was thrilled.</p></div>
      </div>
      <div className="go-to-website-button"><a href="https://emilybandel.github.io/webpage-application/" target="_blank" rel="noopener noreferrer"><div className="go-btn-text">Explore the site...</div></a></div>
      <img className="combined-web-img" src={fullWebpage} alt="full webpage of Emily Bandel's website"></img>
      <img className="landing-page-image" src={landingPageImage} alt="full webpage of Emily Bandel's website"></img>
      <img className="emily-twitter-photo" src={TwitterLogo} alt='Twitter Logo'></img>
      <div onClick={() => this.state.NavigationViewer.popFromNavigationStack()}><div className= "back-button"></div></div>
      <div onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Work)}><div className= "more-button"><div className="glow-button-inner"></div></div></div>
      <div className="screen-number"><p>1/1</p></div> 
      </div>
      </div>
    );
  }
}

export default Feature;