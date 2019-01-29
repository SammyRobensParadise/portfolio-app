import React, { Component } from 'react';

//import CSS ---------------------------------------
import '../styles/Socials.css';

//import assets ------------------------------------
import expandedGithub from '../assets/connect_expand_github.svg';
import contactSocial from '../assets/contact_icon.svg';
import contactSocialHover from '../assets/contact_icon_blue.svg';
import resumeSocial from '../assets/resume_btn.svg';
import resumeSocialHover from '../assets/resume_btn_blue.svg';
import shareSocial from '../assets/share_icon.svg';
import shareSocialHover from '../assets/share_icon_blue.svg';
import instagramSocial from '../assets/share_btn_expand_instagram.svg';
import facebookSocial from '../assets/share_btn_expand_fb.svg';
import emailSocial from '../assets/share_btn_expand_email.svg';

//import libraries ---------------------------------
import anime from 'animejs';

class Socials extends Component {
  constructor(props){
    super(props)
    this.state = {
      isRendered: false
    }
    }
  
    componentDidMount(){
    }
  render() {
    const shareList = <ul><li></li><li></li><li></li></ul>
    const contactList = <ul><li></li><li></li><li></li></ul>
    return (
      <div className="social">
      <div className="btn-contain">
      <div className="btn"><div className="icon-resume"></div></div>
      <div className="btn"><div className="icon-social"></div></div>
      <div className="btn"><div className="icon-contact"></div></div>
      </div>
      </div>
    );
  }
}

export default Socials;