import React, { Component } from 'react';
import '../styles/Cookie.scss';

class Cookie extends Component {
    constructor(props){
        super(props)
        this.state = {
            isShowing: true
        }
    }
CloseCookieDialog = () => {
    this.setState({ isShowing: false})
}
  render() {
      if(this.state.isShowing){
    return (
      <div className="cookie-static">
      <div className="cookie-bar">
      <div className="close-button" type="button" onClick= { () => this.CloseCookieDialog()}><span role="img" aria-label="close">❌</span></div>
      <div className="cookie-rocket"></div>
      <div className="cookie-text">
      <p><span role="img" aria-label="rocket">🚀</span> Message from Mission Control: It looks like you've landed here before; Reach out to <a href="mailto:srobensp@edu.uwaterloo.ca?Subject=Inquiry%20From%20Website" target="_top">make this official!</a></p>
      </div>
      </div>
      </div>
    );
      } else {
          return null;
      }
  }
}

export default Cookie;