import {
    throws
} from "assert";
import React, {
    Component
} from 'react';
import Home from "./Home";
import App from './App';
import Work from './Work';
import About from './About';
import Feature from "./Feature";

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
                console.log("NavigationHandler::constructor()", componentRegister)
                this.state = {
                    HasError: false
                }
            }
            componentDidCatch(error, info) {
                console.log(error, info);
            }
            componentDidMount() {
                console.log("NavigationHandler::componentDidMount()");
                return true;
            }
            componentDidUpdate(screen) {
                console.log("NavigationHandler::componentdidupdate()")
                let appobj = new App()
                appobj.forceUpdate();
            }
            pushToNavigationStack = (screen) => {
                if (screen === Home) {
                    ViewStack.push( < Home/> );
                } else
                if (screen === Work) {
                    ViewStack.push( < Work/> )
                } else
                if (screen === About) {
                    ViewStack.push( < About/> )
                } else 
                if (screen === Feature){
                    ViewStack.push( <Feature/>)
                } else
                 {
                    ViewStack.push( <p>404: Error Page Not Found</p>)
                    }
                }

                componentWillUnmount() {
                    console.log("NavigationHandler:componentWillUnmount()");
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
                    console.log(ViewStack, "in _getCurrentView()")
                    // appref.setState({currentView: this.ViewStack[elem]})
                    return ViewStack[elem];
                }
            }
