import { throws } from "assert";


//This class is the bread and butter of the applications naviation. It handles screen navigation
// Via a mutable arrau similar to a stack ||||||||||||||||||| where the last element of the mutable array
//is what is rendered in the browser so if this is the stack => | | | | | | | [     _|_ ...this is sent to the browser...   ]

export default class NavigationHandler {

    ViewStack = [null]; // declaration of the viewHandler Navigation Stack

    constructor(componentRegister){
        this.componentRegister = componentRegister;
        this.state = {
            naviationActive: true
        }
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
    _getCurrentView(){
        let displayEl = this.ViewStack.length-1;
        return this.ViewStack[displayEl];
    }
}

