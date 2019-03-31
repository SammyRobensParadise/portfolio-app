import React, {
  Component
} from 'react';
import './styles/Resume.scss';
import './styles/Navigation.scss';
import anime from 'animejs';
import NavigationHandler, { ScreenEnum } from './NavigationHandler';


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
                    Agile and Lean prototyping, design, testing, concept ideation, test infrastrucutre development, data driven UX research and analysis.
                   </div>
                  </div>
                </div>
                <div className="col-icon-center">
                  <div className="design-tools"><div className="design-icon"></div><div className="design-text">
                    Photoshop, Illustrator, Indesign, Invision, Marvel Design Studio, motion design library experience.
                  </div>
                  </div>
                </div>
                <div className="col-icon-right">
                  <div className="dev-tools"><div className="dev-icon"></div><div className="dev-text">
                    React, javaScript, jQuery, CSS (Sass &#38; Less), HTML, C++, Python, SQL, VB, Git, Linux Ubuntu, XML.
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
            <div className="work-ffs"><p>QA Lead &#38; Analytics Developer - <span className="ffs-text">Finger Food Studios</span></p></div>
            <ul className="section-description">
              <li><p className="para">- Led  3+ project QA initiatives and lean infrastructure development from concept design to product delivery.</p></li>
              <li><p className="para">- Increased web project test effency by 150% by developing optimized test script architecture.</p></li>
              <li><p className="para">- Spear Headed implementaition of data-driven UX analysis for bleeding edge AR and VR applications.</p></li>
              <li><p className="para">- Designed and developed automated test infrastructure to qualtify accuracy of computer vision lidar system.</p></li>
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
            <div className="proj-free"><p>Freelance Web Design &#38; Development - <span className="free-text">EmilyBandel.com</span></p></div>
            <ul className="section-description">
              <li><p className="para">- Iterativy Designed and Developed single page react app for Actress, Emily Bandel.</p></li>
              <li><p className="para">- Engaged client in multiple design sessions and reviews throughout design process.</p></li>
              <li><p className="para">- Worked with client to create media adressing unique needs of Vancouver-based actress.</p></li>
              <li><p className="para">- Created web application in React.js, designing for scalability and changing media.</p></li>
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
        <div onClick={() => this.state.NavigationViewer.popFromNavigationStack()}><div className="back-button"><div className="glow-button-inner-horizontal"></div></div></div>
        <div className="screen-number"><p>1/1</p></div>
      </div>
    );
  }
}

export default Resume;