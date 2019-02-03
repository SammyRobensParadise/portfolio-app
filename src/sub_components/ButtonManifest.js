
// this is a manifest containging the htm that is specific to the buttons formatting for the webpages
import React, {
    Component
  } from 'react';
import Home from '../Home';
import Work from '../Work';
import NavigationHandler from '../NavigationHandler';

export default class ButtonManifest {
    constructor(props){
        this.state = {
            navigationRefObj: new NavigationHandler(),
            home: Home
        }
    }
 navigationBarStructure = () =>{ return (
    <ul>
    <li className="home" onClick={this.state.navigationRefObj.pushToNavigationStack(<Home/>)}><span className="navigation">R. Paradise</span></li>
    <li className="work" onClick={this.state.navigationRefObj.pushToNavigationStack(<Work/>)}><span className="navigation">Work</span></li>
    <li className="about"><span className="navigation">About</span></li>
     </ul>

);
}

 homeButtonStructure= () => { return (
    <div className="navigation-module">
    <div className="navigation-bar">
    {this.navigationBarStructure()}
    </div>
    <div><div className= "more-button"></div></div>
    </div>
);
 }

 FeatureButtonStructure = (
    <div className="navigation-module">
    <div className="navigation-bar">
    <ul>
<li className="home"><span className="navigation">R. Paradise</span></li>
<li className="work"><span className="navigation">Work</span></li>
<li className="about"><span className="navigation">About</span></li>
    </ul>
    </div>
    <div><div className= "more-button"></div></div>
    </div>
);
}