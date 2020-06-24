import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.scss";
import "./styles.css";

class App extends Component {
  //create State
  state = {
    text: "Text Disini"
  };
  onclick = () => {
    this.setState(
      {
        text: "OK"
      },
      () => {
        alert("Login!");
      }
    );
  };
  render() {
    const { text } = this.state;

    return (
      <div className="App">
        <button onClick={this.onclick}>Login</button>
        <div />
        <h2>{text}</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
