import React, { Component } from "react";
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleClick = (val) => {
    this.setState({count: val})
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.count}</p>
        <button className="success" onClick={() => this.handleClick(this.state.count + 1)}>incr</button>
        <button className="secondary" onClick={() => this.handleClick(0)}>Reset</button>
        <button className="danger" onClick={() => this.handleClick(this.state.count - 1)}>decr</button>
      </div>
    );
  }
}

export default App;