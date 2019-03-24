import React, {
  Component
} from 'react';
import '../styles/Navigation.scss';
//Component import -----------------------

import Home from '../Home';


//manifestimport

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRendered: false,
      currentButtonView: props.currentView

    }

  }

  _getRenderedState = () => {
    return this.state.isRendered;
  }
  componentDidMount() {
    console.log("Navigation::componentdidMount()")
    return true;
  }
  componentDidUpdate() {
    return true;
  }
  render(props) {
    if (this.props.currentView === Home) {
      return (
        <div className="buttons">
          <div className="buttons-inner">
            <this.state.manifestObj.homeButtonStructure />
          </div>
        </div>
      );
    }
  }
}


export default Navigation;