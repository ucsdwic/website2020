import React from "react";
import ReactDOM from "react-dom";
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import GroupPic from "../static/homeOverlay.png";
import Button from "../components/Button";
import LogoCenter from "../static/LogoCenterHome.png";

class Home extends React.Component {
  render() {
    return (
      <div id="homeImage">
        <Container id="homeCenterContainer">
          <Row type="flex" justify="center">
            <Col id="homeCenterLogo" md={6}>
              <img src={LogoCenter} alt="Wic Logo" />
            </Col>
            <Col id="homeCenterText" md={12}>
              <p>Women in Computing @ UC San Diego</p>
            </Col>
            <Col id="homeCenterButton" md={12}>
              <Button
                type="home"
                text="Join Us"
                toLink="https://docs.google.com/forms/d/e/1FAIpQLScsf3G_eeySKZ_8dhYSUFtQmUNnFwa__rVOOBnrvium5lIAjQ/viewform?usp=sf_link"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
