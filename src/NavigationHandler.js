import {
    throws
} from "assert";
import React, {
    Component
} from 'react';
import Home from "./Home";
import App from './App';
import Work from './Work';
import WorkTwo from './WorkTwo';
import About from './About';
import Feature from "./Feature";
import AboutTwo from './AboutTwo';
import AboutThree from "./AboutThree";
import Resume from './Resume';

export const ScreenEnum = {
    Home: 1,
    Work: 2,
    WorkTwo: 3,
    About: 4,
    Feature: 5,
    AboutTwo: 6,
    AboutThree: 7,
    Resume: 8
}
//This class is the bread and butter of the applications naviation. It handles screen navigation
// Via a mutable arrau similar to a stack ||||||||||||||||||| where the last element of the mutable array
//is what is rendered in the browser so if this is the stack => | | | | | | | [     _|_ ...this is sent to the browser...   ]
export var ViewStack = [ <p> ViewStack Var: We are still getting things prepared,
        if you 've been waiting a while try reloading the page...</p>];
        export default class NavigationHandler extends Component {

            // declaration of the viewHandler Navigation Stack


            constructor(componentRegister, props) {
                super(componentRegister, props);
                this.componentRegister = componentRegister;
                this.state = {
                    HasError: false
                }
            }
            componentDidCatch(error, info) {
                console.log(error, info, throws);
            }
            componentDidMount() {
                return true;
            }
            componentDidUpdate(screen) {

                let appobj = new App()
                appobj.forceUpdate();
            }
            pushToNavigationStack = (screen) => {
                if (screen === ScreenEnum.Home) {
                    ViewStack.push( <Home/> );
                } else
                if( screen === ScreenEnum.Resume){
                    ViewStack.push(<Resume/>)
                } else
                if (screen === ScreenEnum.Work) {
                    ViewStack.push( <Work/> )
                } else
                if (screen === ScreenEnum.About) {
                    ViewStack.push( <About/> )
                } else 
                if (screen === ScreenEnum.Feature){
                    ViewStack.push( <Feature/>)
                } else
                if ( screen === ScreenEnum.WorkTwo){
                    ViewStack.push( <WorkTwo/> )
                } else
                if( screen === ScreenEnum.AboutTwo){
                    ViewStack.push( <AboutTwo/>)
                } else
                if( screen === ScreenEnum.AboutThree){
                    ViewStack.push(<AboutThree/>)
                } else
                 {
                    ViewStack.push( <p>404: Error Page Not Found. Reload the Webpage to clear the error.</p>)
                    }
                }

                componentWillUnmount() {

                }
                popFromNavigationStack = () => {
                   ViewStack.pop();
                }
                _getRegister() {
                    return this.componentRegister;
                }
                _getCurrentView = (props) => {
                    var displayEl = ViewStack.length;
                    let elem = displayEl - 1;
                    return ViewStack[elem];
                }
            }
