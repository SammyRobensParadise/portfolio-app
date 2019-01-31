import React, { Component } from 'react';
//import CSS ---------------------------------------
import '../styles/Socials.scss';

/*/import assets ------------------------------------
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
*/
//import libraries ---------------------------------
import anime from 'animejs';

class Socials extends Component {
  constructor(props){
    super(props)
    this.state = {
      isRendered: false,
      showShareExpanded: false,
      showContactExpanded: false,
      currentClickCount: 0
    }
    }
    componentDidMount(){
      setTimeout( () => {
        this.setState({isRendered: true});
      },500);
    }
    componentDidUpdate(props){
      let PrevClickCount = this.props.currentClickCount;
      if(PrevClickCount > this.state.currentClickCount){
        this.ShareContract();
        this.ContactContract();
        setTimeout(() => {
        this.setState({
          showContactExpanded: false,
          showShareExpanded: false
        });
      },600);
        this.setState({currentClickCount: PrevClickCount});
      }  
    }
    toggledShare = () => {
      this.setState({showContactExpanded: false});
      if(!this.state.showShareExpanded){
      this.setState({showShareExpanded: true});
      setTimeout(() => {this.ShareExpand()},1)
      } else {
       // this.setState({showShareExpanded: false});
      }
    }
    toggleContact = () => {
      this.setState({showShareExpanded: false});
      if(!this.state.showContactExpanded){
      this.setState({showContactExpanded: true});
      setTimeout(() => {this.ContactExpand()},1)
      } else {
        // this.setState({showContactExpanded: false});
      }
    }

    //expand the share buttons pannel ---------------------------------
    ShareExpand = () =>{
      anime({
        targets: '.icon-fb',
        translateX: '-6rem',
        opacity: [0,1],
        duration: 600,
      })
      anime({
        targets: '.icon-instagram',
        translateX: '-6rem',
        opacity: [0,1],
        delay: 100,
        duration: 600,
      })
      anime({
        targets: '.icon-email',
        translateX: '-6rem',
        opacity: [0,1],
        delay: 200,
        duration: 600,
      })
    }
    //close the share buttons pannel ----------------------------------
    ShareContract = () => {
      anime({
        targets: '.icon-fb',
        translateX: '6rem',
        opacity: [1,0],
        delay: 200,
        duration: 600,
      })
      anime({
        targets: '.icon-instagram',
        translateX: '6rem',
        opacity: [1,0],
        delay: 100,
        duration: 600,
      })
      anime({
        targets: '.icon-email',
        translateX: '6rem',
        opacity: [1,0],
        duration: 600,
      })
    }
  //expand Contact pannel ---------------------------------------
  ContactExpand = () =>{
    anime({
      targets: '.icon-github',
      translateX: '-6rem',
      opacity: [0,1],
      duration: 600,
    })
  }
  ContactContract = () => {
    anime({
      targets: '.icon-github',
      translateX: '6rem',
      opacity: [1,0],
      duration: 600,
    })
  }

  render() {
  const shareList = <div className="expanded-share"><div className="icon-fb"></div><div className="icon-instagram"></div><div className="icon-email"></div></div>
    const contactList = <div className="expanded-contact"><div className="icon-github"></div></div>
    let showContact = this.state.showContactExpanded;
    let showShare = this.state.showShareExpanded;

    if(!showShare && !showContact){
    return (
      <div className="social">
      <div className="btn-contain">
      <div className="btn"><div className="icon-resume"></div></div>
      <div className="btn"><div className="icon-social" onClick={this.toggledShare}></div></div>
      <div className="btn"><div className="icon-contact" onClick={this.toggleContact}></div></div>
      </div>
      </div>
    );
    } else
    if(showShare & !showContact){
      return (
      <div className="social">
      <div className="btn-contain">
      <div className="btn"><div className="icon-resume"></div></div>
      <div className="btn"><span>{shareList}<div className="icon-social" onClick={this.toggledShare}></div></span></div>
      <div className="btn"><div className="icon-contact" onClick={this.toggleContact}></div></div>
      </div>
      </div>
      );
    } else
    if(!showShare & showContact){
      return (
      <div className="social">
      <div className="btn-contain">
      <div className="btn"><div className="icon-resume"></div></div>
      <div className="btn"><div className="icon-social" onClick={this.toggledShare}></div></div>
      <div className="btn"><span>{contactList}<div className="icon-contact" onClick={this.toggleContact}></div></span></div>
      </div>
      </div>
      );
    }

}
}
export default Socials;