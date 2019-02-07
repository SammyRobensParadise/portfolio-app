import React, { Component } from 'react';
import anime from 'animejs';

class Work extends Component {
  constructor(props){
    super(props);
      this.state = {
        _isRendered: false
      }
  }
  componentDidMount(){
    console.log("Work::componentdidMount()");
    this.setState({
      _isRendered: true
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> WORK
            {console.log("work is in render")}
          </p>
        </header>
      </div>
    );
  }
}

export default Work;