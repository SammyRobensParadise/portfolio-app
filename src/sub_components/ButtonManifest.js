
// this is a manifest containging the htm that is specific to the buttons formatting for the webpages
import React, {
    Component
  } from 'react';
import Home from '../Home';
import Work from '../Work';
import NavigationHandler from '../NavigationHandler';
import App from '../App';

export default class ButtonManifest extends Component{
    constructor(props){
        console.log("ButtonManifest::Constructor()")
        super(props);
        this.state = {
            navigationRefObj: new NavigationHandler("ButtonManifest"),
            home: Home,
            hasError: false
        }
    }
sendtoNavStack = (e) =>{
    this.state.navigationRefObj.pushToNavigationStack(e);
}
componentDidCatch(error,info){
    console.log(error,info);
    this.setState({hasError: true})
}
componentDidMount(){
    console.log("ButtonManifest::componentDidMount()");
    return true;
}
 navigationBarStructure = () => {
         return (
    <ul>
    <li className="home" onClick={() => this.sendtoNavStack(Home)}><span className="navigation">R. Paradise</span></li>
    <li className="work" onClick={() => this.sendtoNavStack(Work)}><span className="navigation">Work</span></li>
    <li className="about"><span className="navigation">About</span></li>
     </ul>

);
}
componentDidUpdate(props){
}

 homeButtonStructure = () => {
         return (
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
render(error,info){
    if(this.state.hasError){
        return <h1>It looks like an error has occured in {error + info} please come back when the probelm is fixed</h1>
    }
}
}