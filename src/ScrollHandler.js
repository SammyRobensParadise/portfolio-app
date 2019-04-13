import {
    throws
} from "assert";
import React, {
    Component
} from 'react';

export default class ScrollHandler extends Component {

    constructor(componentRegister, props) {
        super(componentRegister, props);
        this.componentRegister = componentRegister;
        this.state = {
            HasError: false,
            prevScrollPos: 0, //this is the initial window.Yoffset val (int)
            visible: true
        }
    }
    componentDidMount() {
        return true;
    }
    componentDidCatch(error, info) {
        this.setState({
            ShouldShowNavigation: true,
            prevScrollPos: 0
        })
        console.log(error, info, throws);
    }
    handleScroll = (currentYoffset) => {
        let prevYoffset = this.state.prevScrollPos;
        if (currentYoffset < prevYoffset) {
            this.setState({
                visible: false
            })
            return true;
        } else {
            this.setState({
                visible: true
            })
            return false;
        }
    }
    _getVisibilityStatus = () => {
        return this.state.visible;
    }
}