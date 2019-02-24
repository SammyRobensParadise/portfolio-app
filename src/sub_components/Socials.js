import React, { Component } from 'react';
import { FacebookProvider, ShareButton } from 'react-facebook';
import NavigationHandler, { ScreenEnum } from '../NavigationHandler';
//import CSS ---------------------------------------
import '../styles/Socials.scss';

//import libraries ---------------------------------
import anime from 'animejs';
//import Resume from '../Resume';

class Socials extends Component {
  constructor(props){
    super(props)
    this.state = {
      isRendered: false,
      showShareExpanded: false,
      showContactExpanded: false,
      currentClickCount: 0,
      NavigationViewer: new NavigationHandler()
    }
    }
    componentDidMount(){
      setTimeout( () => {
        this.setState({isRendered: true});
      },500);
    }
    componentDidUpdate(){
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
    }
  //expand Contact pannel ---------------------------------------
  ContactExpand = () =>{
    anime({
      targets: '.icon-github',
      translateX: '-6rem',
      opacity: [0,1],
      duration: 600,
      delay: 100
    })
    anime({
      targets: '.icon-email',
      translateX: '-6rem',
      opacity: [0,1],
      delay: 200,
      duration: 600,
    })
    anime({
      targets: '.icon-linkedin',
      translateX: '-6rem',
      opacity: [0,1],
      delay: 300,
      duration: 600,
    })
  }
  ContactContract = () => {
    anime({
      targets: '.icon-github',
      translateX: '6rem',
      opacity: [1,0],
      duration: 600,
      delay: 200
    })
    anime({
      targets: '.icon-email',
      translateX: '6rem',
      opacity: [1,0],
      duration: 600,
      delay: 100
    })
    anime({
      targets: '.icon-linkedin',
      translateX: '6rem',
      opacity: [1,0],
      duration: 600,
    })
  }

  render() {
  const shareList = <div className="expanded-share">
  <div className="icon-fb-outer">
   <FacebookProvider appId="813508179041617">
 <ShareButton className="icon-fb" href="https://portfolio-app-1091c.firebaseapp.com/">
  </ShareButton>
 </FacebookProvider>
 </div>
 <a id="instagram-link" href="https://www.instagram.com/stereo_west/" target="_blank" rel="noopener noreferrer"><div className="icon-instagram"></div></a></div>

  const contactList = <div className="expanded-contact"><a id="github-link" href="https://github.com/SammyRobensParadise" target="_blank" rel="noopener noreferrer"><div className="icon-github"></div></a>
    <a href="mailto:srobensp@edu.uwaterloo.ca?Subject=Inquiry%20From%20Website" target="_top"><div className="icon-email"></div></a>
    <a id="linkedin-link" href="https://www.linkedin.com/in/sammy-robens-paradise/" target="_blank" rel="noopener noreferrer"><div className="icon-linkedin"></div></a>
    </div>
    let showContact = this.state.showContactExpanded;
    let showShare = this.state.showShareExpanded;

    if(!showShare && !showContact){
    return (
      <div className="social">
      <div className="btn-contain">
      <div className="btn"><div className="icon-resume" onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Resume)}></div></div>
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
      <div className="btn"><div className="icon-resume" onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Resume)}></div></div>
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
      <div className="btn"><div className="icon-resume" onClick={() => this.state.NavigationViewer.pushToNavigationStack(ScreenEnum.Resume)}></div></div>
      <div className="btn"><div className="icon-social" onClick={this.toggledShare}></div></div>
      <div className="btn"><span>{contactList}<div className="icon-contact" onClick={this.toggleContact}></div></span></div>
      </div>
      </div>
      );
    }

}
}
export default Socials;