import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relatives = ["a", "b", "c", "d"];
    return (
      <>
        <ol key="relativeList">
          {relatives.map((relatives, index) => (
            <li key={`relativeListItems${index + 1}`}></li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
