import React, {
  Component
} from 'react';
import './styles/Policy.scss';
import './styles/Navigation.scss';
import anime from 'animejs';
import NavigationHandler, { ScreenEnum } from './NavigationHandler';
import { BrowserRouter as Router, Link } from "react-router-dom";


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
    window.addEventListener("popstate", this.popHandler);

    let thisPage = {
      name: "policy"
    };
    window.history.pushState(thisPage, "policy", "policy");
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
  componentWillUnmount(){
    window.removeEventListener("popstate", this.popHandler);
  }
  popHandler = () => {
    this.state.NavigationViewer.popFromNavigationStack();
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
            <ul className="ul-title">
              <li className="home" onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Home)}><Link to="/Home"><span className="navigation">R. Paradise</span></Link></li>
            </ul>
          </div>
          <div className="policy-content">

            <p>Effective date: February 22, 2019</p>


            <p>Sammy Robens-Paradise | Design Develop With Me ("us", "we", or "our") operates the https://portfolio-app-1091c.firebaseapp.com/website (the "Service").</p>

            <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

            <p>We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://portfolio-app-1091c.firebaseapp.com/</p>


            <h2 className="h-2-title">Information Collection And Use</h2>

            <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

            <h3 className="h-3-title">Types of Data Collected</h3>

            <h4 className="h-4-title">Personal Data</h4>

            <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>

            <ul className="ul-title">
              <li>Email address</li><li>Address, State, Province, ZIP/Postal code, City</li><li>Cookies and Usage Data</li>
            </ul>

            <h4 className="h-4-title">Usage Data</h4>

            <p>We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>

            <h4 className="h-4-title">Tracking Cookies Data</h4>
            <p>We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
            <p>Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>
            <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
            <p>Examples of Cookies we use:</p>
            <ul className="ul-title">
              <li><strong>Session Cookies.</strong> We use Session Cookies to operate our Service.</li>
              <li><strong>Preference Cookies.</strong> We use Preference Cookies to remember your preferences and various settings.</li>
              <li><strong>Security Cookies.</strong> We use Security Cookies for security purposes.</li>
            </ul>

            <h2 className="h-2-title">Use of Data</h2>

            <p>Sammy Robens-Paradise | Design and Develop With Me uses the collected data for various purposes:</p>
            <ul className="ul-title">
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer care and support</li>
              <li>To provide analysis or valuable information so that we can improve the Service</li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2 className="h-2-title">Transfer Of Data</h2>
            <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.</p>
            <p>If you are located outside Canada and choose to provide information to us, please note that we transfer the data, including Personal Data, to Canada and process it there.</p>
            <p>Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</p>
            <p>Sammy Robens-Paradise | Design and Develop With Me will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>

            <h2 className="h-2-title">Disclosure Of Data</h2>

            <h3 className="h-3-title">Legal Requirements</h3>
            <p>Sammy Robens-Paradise | Design and Develop With Me may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
            <ul className="ul-title">
              <li>To comply with a legal obligation</li>
              <li>To protect and defend the rights or property of Sammy Robens-Paradise | Design and Develop With Me</li>
              <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
              <li>To protect the personal safety of users of the Service or the public</li>
              <li>To protect against legal liability</li>
            </ul>

            <h2 className="h-2-title">Security Of Data</h2>
            <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

            <h2 className="h-2-title">Service Providers</h2>
            <p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
            <p>These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>



            <h2 className="h-2-title">Links To Other Sites</h2>
            <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
            <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>


            <h2 className="h-2-title">Children's Privacy</h2>
            <p>Our Service does not address anyone under the age of 18 ("Children").</p>
            <p>We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>


            <h2 className="h-2-title">Changes To This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
            <p>We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</p>
            <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>


            <h2 className="h-2-title">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="ul-title">
              <li>By email: srobensparadise@gmail.com</li>

            </ul>
            <br></br>
          </div>
          <div onClick={() => this.state.NavigationViewer.popFromNavigationStack()}><Link to="/home"><div className="back-button"><div className="glow-button-inner-horizontal"></div></div></Link></div>
          <div className="screen-number"><p>1/1</p></div>
        </div>
      </Router>
    );
  }
}

export default Policy;