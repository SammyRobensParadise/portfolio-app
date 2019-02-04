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

       // declaration of the viewHandler Navigation Stack

    constructor(componentRegister,props){
        super(componentRegister,props);
        this.componentRegister = componentRegister;
        this.ViewStack = [<p> ViewStack Var: We are still getting things prepared, if you've been waiting a while try reloading the page...</p>];
        this.state = {
            naviationActive: true,
            ViewStack: [<p> We are still getting things prepared, if you've been waiting a while try reloading the page...</p>],
            HasError: false,
            homeRef: <Home/>
        }
    }
    componentDidCatch(error,info){
        console.log(error,info);
    }
    componentDidMount(){
        console.log("NavigationHandler::componentDidMount()");
        return true;
    }
    componentDidUpdate(screen){
        console.log("NavigationHandler::componentdidupdate()")
    }
    pushToNavigationStack = (screen) => {
        if(!this.componentDidMount()){
            return;
        }
        if(screen === Home){
        console.log("pushtonavigation stack called");
     /*  this.setState({
             ViewStack: [...this.state.ViewStack, this.state.homeRef]
          }); */
          this.ViewStack.push(<Home/>);
        }
   }
   componentWillUnmount(){
       console.log("NavigationHandler:componentWillUnmount()");
   }
    popFromNavigationStack = (ViewStack) => {
        ViewStack.pop();
    }
    _getRegister(){
        return this.componentRegister;
    }
    _getCurrentView = () =>{
        let displayEl = this.ViewStack.length-1;
      //  console.log(this.ViewStack.push(<Home/>))
        console.log('_getCurrentView() Triggered ', "displayEL: " + displayEl);
        return this.ViewStack[displayEl];
    }
    render(){
        return <div></div>;
    }
}
