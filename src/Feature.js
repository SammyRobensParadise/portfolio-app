import React, { Component } from 'react';
import './styles/Feature.scss';
import anime from 'animejs';
import fullWebpage from './img/Combined.png';
import landingPageImage from './img/LandingPage.png';
import TwitterLogo from './img/Emily_Bandel_Twitter.png';

class Feature extends Component {
  render() {
    return (
      <div className="Feature">
      <div className="screen-1">
      <div className="feature-title">Act of Inspiration</div>
      <div className="definition-text">
      <div className="the-problem-header"><span>The Problem</span></div>
      <div className="the-problem-text"><p>Emily Bandel, and Actress based in Vancouver and California, with features on Sabrina, Standing Room Only, and A Twisted Fate; was looking for a way to show her talent and uniqueness to a growing audinace.
       Emily was having trouble expressing what made her her on traditional platforms such as social media.</p></div>
      <div className="the-solution-header"><span>The Solution</span></div>
      <div className="the-solution-text"><p>Emily Bandel comissioned me to create her own platform where audiances could gather an individualistic and holostic understanding of Emily. 
      The design went through three iterations and everything from color patterns to content was build with Emily in mind. 
      I was able to take  the project from wireframes and client meetings to beautiful code, constructed in React.js. 
      Needless to say, Emily was thrilled.</p></div>
      </div>
      <div className="go-to-website-button"><a href="https://emilybandel.github.io/webpage-application/" target="_blank" rel="noopener noreferrer"><div className="go-btn-text">Explore the site...</div></a></div>
      <img className="combined-web-img" src={fullWebpage} alt="full webpage of Emily Bandel's website"></img>
      <img className="landing-page-image" src={landingPageImage} alt="full webpage of Emily Bandel's website"></img>
      <img className="emily-twitter-photo" src={TwitterLogo} alt='Twitter Logo'></img>
      </div>
      <div className="screen-2"></div>
      <div className="screen-3"></div> 
      </div>
    );
  }
}

export default Feature;