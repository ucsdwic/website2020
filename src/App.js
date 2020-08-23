import React from "react";
import { setConfiguration } from "react-grid-system";
import "./styles/App.scss";

setConfiguration({ gutterWidth: 40 });

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>Hello World</h2>
      <h3>Hello World</h3>
      <h4>Hello World</h4>
      <h5>Hello World</h5>
      <h6>Hello World</h6>
      <p>Hello World</p>
    </div>
  );
}

export default App;
