import React, {
  Component
} from 'react';
import './styles/Resume.scss';
import './styles/Navigation.scss';
import anime from 'animejs';
import NavigationHandler, { ScreenEnum } from './NavigationHandler';
import classnames from "classnames";
import ScrollHandler, { scrollBool } from './ScrollHandler';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRendered: false,
      NavigationViewer: new NavigationHandler(),
      navButtonsVisible: true,
      ScrollObj: new ScrollHandler()
    }
  }
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
    window.addEventListener("popstate", this.popHandler);

    let thisPage = {
      name: "resume"
    };
    window.history.pushState(thisPage, "resume", "resume");
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
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
    window.removeEventListener("popstate", this.popHandler);

  }
  scrollHandler = () => {
    this.state.ScrollObj.handleScroll(window.pageYOffset);
    this.setState({
      navButtonsVisible: scrollBool
    })
  }
  popHandler = () => {
    this.state.NavigationViewer.popFromNavigationStack();
  }
  animateGlow = () => {
    anime({
      targets: '.back-button',
      direction: 'alternate',
      loop: true,
      easing: 'linear',
      duration: 2500,
      borderRadius: ['25%', '35%'],
      boxShadow: [' inset 0rem 0rem 0rem 0rem #450092', ' 0rem 0rem 2rem 0.1rem #450092']
    })
  }
  render() {
    return (
      <div className="Resume">
        <div className="navigation-bar">
          <ul>
            <li className="home" onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Home)}><span className="navigation">Start Over...</span></li>
          </ul>
        </div>
        <div className="row">
          <div className="col-header">
            <div className="resume-title">Sammy Robens-Paradise</div>
          </div>
        </div>
        <div className="row">
          <div className="header-icon-col">
            <div className="icon-headers">
              <div className="row">
                <div className="col-icon-left">
                  <div className="skillset"><div className="skillset-icon"></div><div className="skillset-text">
                    Agile and lean prototyping,
  design, testing, concept ideation,
  test infrastrucutre development, Jira,
  data driven UX research &#38; analysis.
                   </div>
                  </div>
                </div>
                <div className="col-icon-center">
                  <div className="design-tools"><div className="design-icon"></div><div className="design-text">
                    Photoshop, Illustrator, Indesign,
  Invision, Marvel Design Studio,
  motion design, Bootstrap,
  web animation, illustration.
                  </div>
                  </div>
                </div>
                <div className="col-icon-right">
                  <div className="dev-tools"><div className="dev-icon"></div><div className="dev-text">
                    React, javaScript, jQuery,
  CSS (Sass &#38; Less), HTML, PHP
  C++, Python, MySQL, VB, Git,
  SVN,Linux Ubuntu,npm.
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="scrollable-resume-col">
            <div>
              <p className="work-section">Work</p>
              <div className="work-ffs"><p>QA Lead - <span className="ffs-text">Finger Food Studios</span></p></div>
              <ul className="section-description">
                <li><p className="para">- Led 3+ project QA initiatives and lean infrastructure development from concept design to product delivery.</p></li>
                <li><p className="para">- Increased web project test effency 50% by redesigning &#38; optimizing test infrastructure.</p></li>
                <li><p className="para">- Spear headed implementaition of data-driven UX analysis for AR apps games, and global brands.</p></li>
                <li><p className="para">- Designed and developed automated test infrastructure to qualtify accuracy of computer vision system.</p></li>
              </ul>
              <div className="work-govt"><p>Software Engineering Intern - <span className="govt-text">Environment &#38; Climate Change Canada</span></p></div>
              <ul className="section-description">
                <li><p className="para">- Used SQL and Access to iteratively develop and deploy testing scripts for complex relational databases.</p></li>
                <li><p className="para">- Developed SQL queries to test critical business rules governing data validation.</p></li>
                <li><p className="para">- Played critical role in documenting and facilitating complex data projects with multiple stakeholders.</p></li>
              </ul>
            </div>
            <div>
              <p className="projects-section">Projects</p>
              <div className="proj-free"><p>Freelance Web Design &#38; Development - <span className="free-text">Emily Bandel, Actress</span></p></div>
              <ul className="section-description">
                <li><p className="para">- Designed and developed single page react app for Actress, Emily Bandel.</p></li>
                <li><p className="para">- Engaged client in multiple design sessions and reviews throughout design process.</p></li>
                <li><p className="para">- Created web application in React.js, designing for scalability and client growth.</p></li>
              </ul>
              <div className="proj-gangl"><p>Student UX Optimization Design - <span className="gangl-text">Gangle App</span></p></div>
              <ul className="section-description">
                <li><p className="para">- Gangl App manages and structures student's worloads into a simple user-centered platform</p></li>
                <li><p className="para">- Gangle was created and conceptualized by engineering design team as a way to address workload related stress of university students</p></li>
                <li><a href="https://www.youtube.com/watch?v=QaixSsK434s" target="_blank" rel="noopener noreferrer"><div className="youtube-link"><p className="para">- watch the gangle design process...</p></div></a></li>
              </ul>
            </div>
            <div>
              <p className="education-section">Education</p>
              <div className="edu-systems"><p>Systems Design Engineering - <span className="systems-text">The University of Waterloo</span></p></div>
              <ul className="section-description">
                <li><a href="https://uwaterloo.ca/systems-design-engineering/about-systems-design-engineering/what-systems-design-engineering" target="_blank" rel="noopener noreferrer"><p className="para">- Learn more about Systems...</p></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classnames("nav-el", {
          "navigation-hidden": !this.state.navButtonsVisible
        })}>
          <div onClick={() => this.state.NavigationViewer.popFromNavigationStack()}><div className="back-button"><div className="glow-button-inner-horizontal"></div></div></div>
        </div>
        <div className="screen-number"><p>1/1</p></div>
      </div>
    );
  }
}

export default Resume;