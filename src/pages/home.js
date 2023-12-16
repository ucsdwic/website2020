import React from "react";
import ReactDOM from "react-dom";
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import GroupPic from "../static/homeOverlay.png";
import Button from "../components/Button";
import LogoCenter from "../static/LogoCenterHome.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';

class Home extends React.Component {
  render() {
    return (
      <div id="homeImage">
        <Container id="homeCenterContainer">
          <Row type="flex" justify="center">
            <Col id="homeCenterLogo" md={6}>
              <LazyLoadImage src={LogoCenter} alt="Wic Logo" effect="blur"/>
            </Col>
            <Col id="homeCenterText" md={12}>
              <p>Women in Computing @ UC San Diego</p>
            </Col>
            <Col id="homeCenterButton" md={12}>
              <Button
                type="home"
                text="Join Us"
                toLink="https://wic.ucsd.edu/sign-in"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
