import { throws } from "assert";
import React,{Component} from 'react';
import Home from "./Home";
import ButtonManifest from './sub_components/ButtonManifest';
import Button from './sub_components/Button';
import App from './App';
import Work from './Work';

//This class is the bread and butter of the applications naviation. It handles screen navigation
// Via a mutable arrau similar to a stack ||||||||||||||||||| where the last element of the mutable array
//is what is rendered in the browser so if this is the stack => | | | | | | | [     _|_ ...this is sent to the browser...   ]

export default class NavigationHandler extends Component {

    //ViewStack = []; // declaration of the viewHandler Navigation Stack

    constructor(componentRegister,props){
        super(props);
        this.componentRegister = componentRegister;
        this.state = {
            naviationActive: true,
            ViewStack: [<p> 404 error it looks like something has gone wrong</p>],
            HasError: false
        }
    }
    componentDidCatch(error,info){
        console.log(error,info);
    }
    componentDidUpdate(screen){
        console.log("navigation Handler componentdidupdate")
    }
    pushToNavigationStack = (screen) => {
       this.setState(prevState => ({
             ViewStack: [...prevState.ViewStack, screen]
          }))
   }
    popFromNavigationStack = (ViewStack) => {
        ViewStack.pop();
    }
    _getRegister(){
        return this.componentRegister;
    }
    _getViewStack(){
        return this.ViewStack;
    }
    _getCurrentView = () =>{
        let displayEl = this.state.ViewStack.length-1;
        console.log('_getCurrentView() Triggered ' + this._getViewStack());
        console.log('displayEl: '+ displayEl);
        return this.state.ViewStack[displayEl];
    }
}
