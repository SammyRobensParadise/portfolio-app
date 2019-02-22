import React, {
    Component
  } from 'react';
  import './styles/Policy.scss';
  import './styles/Navigation.scss';
  import anime from 'animejs';
  import NavigationHandler, { ScreenEnum } from './NavigationHandler';
  import { BrowserRouter as Router, Route, Link } from "react-router-dom";
  
  
  class Policy extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isRendered: false,
        NavigationViewer: new NavigationHandler()
      }
    }
    componentDidCatch(error, info) {
      console.log(error, info);
    }
    componentDidMount() {
      this.setState({
        isRendered: true
      });
      setTimeout(() => {
        this.animateGlow(this.setisViewed)
      }, 10000)
      return true;
    }
    componentDidUpdate() {
      return true;
    }
    animateGlow = () => {
      anime({
        targets: '.glow-button-inner',
        direction: 'alternate',
        loop: true,
        easing: 'linear',
        duration: 2500,
        borderRadius: ['25%', '35%'],
        boxShadow: [' inset 0rem 0rem 0rem 0rem #450092', ' 0rem 0rem 2rem 0.1rem #450092']
      })
    }
    //ANIMATIONS REQUIRED
    render() {
      return (
          <Router>
        <div className="Policy">
        <div className="navigation-bar">
        <ul>
        <li className="home" onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Home)}><Link to="/Home"><span className="navigation">R. Paradise</span></Link></li>
         </ul>
         </div>
         <div className="policy-content">
         <p>This website uses Google Analytics to collect and evaluate user data. This is done to optimize the user experience of the website.
           By continuing to use this website you are (by extention) agreeing to <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer">Google's Privacy Policies</a>.
         </p>
         <p>With the exclusion of data collected for use by Google, Facebook and Instagram,information collected is not used for any purpose other then to improve the quality of this web application. It is not shared with other Third Party groups, with the exception of Facebook, Instagram and Google.</p>
         <p>Contact Information</p>
         <p>HOW GOOGLE USES INFORMATION FROM SITES OR APPS THAT USE OUR SERVICES
Many websites and apps use Google services to improve their content and keep it free. When they integrate our services, these sites and apps share information with Google.
For example, when you visit a website that uses advertising services like AdSense, including analytics tools like Google Analytics, or embeds video content from YouTube, your web browser automatically sends certain information to Google. This includes the URL of the page you’re visiting and your IP address. We may also set cookies on your browser or read cookies that are already there. Apps that use Google advertising services also share information with Google, such as the name of the app and a unique identifier for advertising.
Google uses the information shared by sites and apps to deliver our services, maintain and improve them, develop new services, measure the effectiveness of advertising, protect against fraud and abuse, and personalize content and ads you see on Google and on our partners’ sites and apps. See our Privacy Policy to learn more about how we process data for each of these purposes and our Advertising page for more about Google ads, how your information is used in the context of advertising, and how long Google stores this information.
Ad personalization
If ad personalization is turned on, Google will use your information to make your ads more useful for you. For example, a website that sells mountain bikes might use Google's ad services. After you visit that site, you could see an ad for mountain bikes on a different site that shows ads served by Google.
If ad personalization is off, Google will not collect or use your information to create an ad profile or personalize the ads Google shows to you. You will still see ads, but they may not be as useful. Ads may still be based on the topic of the website or app you're looking at, your current search terms, or on your general location, but not on your interests, search history, or browsing history. Your information can still be used for the other purposes mentioned above, such as to measure the effectiveness of advertising and protect against fraud and abuse.
When you interact with a website or app that uses Google services, you may be asked to choose whether you want to see personalized ads from ad providers, including Google. Regardless of your choice, Google will not personalize the ads you see if your ad personalization setting is off or your account is ineligible for personalized ads.</p>
         </div>
        <div onClick={() => this.state.NavigationViewer.popFromNavigationStack()}><Link to="/Home"><div className= "back-button"><div className="glow-button-inner-horizontal"></div></div></Link></div>
        <div className="screen-number"><p>1/1</p></div>
        </div>
        </Router>
      );
    }
  }
  
  export default Policy;