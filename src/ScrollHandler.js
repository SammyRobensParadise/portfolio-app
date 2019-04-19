import {
    throws
} from "assert";
import {
    Component
} from 'react';
export var scrollposition = 0;
export var scrollBool = true;
export default class ScrollHandler extends Component {

    constructor(props) {
        super(props);
        this.state = {
            HasError: false,
            prevScrollPos: 0,
            visible: true
        }
        scrollposition = 0;
        scrollBool = true;
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
        console.log(scrollBool, scrollposition, currentYoffset);
        if (currentYoffset > scrollposition) {
            console.log("scrolling Down");
            scrollposition = currentYoffset;
            scrollBool = false;

        } else {
            console.log("scrolling Up");
            scrollposition = currentYoffset;
            scrollBool = true;
        }
    }
    _setScrollPos = (currentYoffset) => {
        console.log("in _setScrollpos", currentYoffset);
        this.setState({
            prevScrollPos: currentYoffset
        })
        console.log("in _setScrollpos", this.state.prevScrollPos);
    }
    _getVisibilityStatus = () => {
        return this.state.visible;
    }
}