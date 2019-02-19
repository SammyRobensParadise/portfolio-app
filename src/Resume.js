import React, {
    Component
  } from 'react';
  import HomeImage from './sub_components/HomeImage';
  import './styles/Resume.scss';
  import './styles/Navigation.scss';
  import anime from 'animejs';
  import NavigationHandler from './NavigationHandler';
  import App from './App';
  import Feature from './Feature';
  import Home from './Home';
  
  
  class Resume extends Component {
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
        this.animateGlow()
      }, 25000)
      return true;
    }
    componentDidUpdate() {
      return true;
    }
    animateGlow = () => {
      anime({
        targets: '.glow-button-inner-horizontal',
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
        <div className="Resume">
        <div className="navigation-bar">
        <ul>
        <li className="home" onClick={() => this.state.NavigationViewer.pushToNavigationStack(Home)}><span className="navigation">Start Over...</span></li>
         </ul>
         </div>
         <div className="resume-title">Sammy Robens-Paradise</div>
        <div className="icon-headers">
        <div className="skillset"><div className="skillset-icon"></div><div className="skillset-text">
        Agile and Lean prototyping, design, testing, concept ideation, test infrastrucutre development, data driven UX research and analysis.
        </div></div>
        <div className="design-tools"><div className="design-icon"></div><div className="design-text">
        Photoshop, Illustrator, Indesign, Invision, Marvel Design Studio, motion design library experience.
        </div></div>
        <div className="dev-tools"><div className="dev-icon"></div><div className="dev-text">
        React, javaScript, jQuery, CSS (Sass &#38; Less), HTML, C++, Python, SQL, VB, Git, Linux Ubuntu, XML.
        </div></div>
        </div>
        <div className="scrollable-resume">
        <div className="work-section"><p>Work</p></div>
        <div className="projects-section"><p>Projects</p></div>
        <div className="education-section"><p>Education</p></div>
        </div>
        <div onClick={() => this.state.NavigationViewer.popFromNavigationStack()}><div className="back-button"><div className="glow-button-inner-horizontal"></div></div></div>
        <div className="screen-number"><p>1/1</p></div>
        </div>
      );
    }
  }
  
  export default Resume;