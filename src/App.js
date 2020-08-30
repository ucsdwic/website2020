import React from "react";
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import "./styles/App.scss";
import JoinUs from "./components/JoinUs";
import GetInvolved from "./components/getInvolved.js";
import ContactUs from "./components/contactUs.js";
import Home from "./components/home.js";
import Button from "./components/Button";
import Sponsors from "./components/sponsors";

setConfiguration({ gutterWidth: 40 });

function App() {
  return (
    <div>
      <h1 className="darkest-background-section">{"<h1> "}Hello World</h1>
      <h2 className="mid-background-section">{"<h2> "}Hello World</h2>
      <h3 className="lightest-background-section"> {"<h3> "}Hello World</h3>
      <h4 className="white-background-section"> {"<h4> "}Hello World</h4>
      <h5> {"<h5> "}Hello World</h5>
      <h6> {"<h6> "}Hello World</h6>
      <p> {"<p> "}Hello World</p>
      <JoinUs/>
      <Home/>;
      <GetInvolved />;
      <Sponsors/>;
      <ContactUs />;
      <Container>
        <Row>
          <Col className="darkest-background-section" sm={6} md={4}>
            <h1>THESE</h1>
          </Col>
          <Col className="mid-background-section " sm={6} md={4}>
            <h2> ARE</h2>
          </Col>
          <Col className="white-background-section" sm={6} md={4}>
            <h3>GRID</h3>
          </Col>
          <Col className="mid-background-section " sm={6} md={4}>
            <h4> COLUMNS</h4>
          </Col>
          <Col className="lightest-background-section" sm={6} md={4}>
            <h5>FOR</h5>
          </Col>
          <Col className="mid-background-section " sm={6} md={4}>
            <h6> DEMO</h6>
          </Col>
        </Row>
      </Container>
      <Button type="secondary" text = "Sponsor Us" toLink = "https://google.com"/>
      <Button type="primary" text = "Sponsor Us" toLink = "https://google.com" />
    </div>
  );
}

export default App;
