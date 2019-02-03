import { throws } from "assert";
import React from 'react';
import Home from "./Home";
import ButtonManifest from './sub_components/ButtonManifest';

//This class is the bread and butter of the applications naviation. It handles screen navigation
// Via a mutable arrau similar to a stack ||||||||||||||||||| where the last element of the mutable array
//is what is rendered in the browser so if this is the stack => | | | | | | | [     _|_ ...this is sent to the browser...   ]

export default class NavigationHandler {

    ViewStack = []; // declaration of the viewHandler Navigation Stack

    constructor(componentRegister){
        this.componentRegister = componentRegister;
        this.state = {
            naviationActive: true,
        }
    }
    pushToNavigationStack = (screen) => {
        this.ViewStack.push(screen);
    }
    popFromNavigationStack = (ViewStack) => {
        ViewStack.pop();
    }
    _getIndex(){
        return this.index;
    }
    _getRegister(){
        return this.componentRegister;
    }
    _getViewStack(){
        return this.ViewStack;
    }
    _getCurrentView = () =>{
        let displayEl = this.ViewStack.length-1;
        console.log('_getCurrentView() Triggered ' + this.ViewStack.toString());
        return this.ViewStack[displayEl];
    }
}

