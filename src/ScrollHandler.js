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
        if (currentYoffset > scrollposition) {
            scrollposition = currentYoffset;
            scrollBool = false;
        } else {
            scrollposition = currentYoffset;
            scrollBool = true;
        }
    }
    _setScrollPos = (currentYoffset) => {
        this.setState({
            prevScrollPos: currentYoffset
        })
    }
    _getVisibilityStatus = () => {
        return this.state.visible;
    }
}