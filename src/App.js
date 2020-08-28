import React from "react";
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import "./styles/App.scss";
import Button from "./components/Button";

setConfiguration({ gutterWidth: 40 });

function App() {
  return (
    <div>
      <Button type="secondary" text = "Sponsor Us" toLink = "https://google.com"/>
      <Button type="primary" text = "Sponsor Us" toLink = "https://google.com" />
    </div>
  );
}

export default App;
