import React from "react";
import ReactDOM from "react-dom";
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import Button from "../components/Button";
import arista from "../static/sponsors/aristanetworks.png";
import bloomberg from "../static/sponsors/bloomberg.png";
import boeing from "../static/sponsors/boeing.png";
import braincorp from "../static/sponsors/braincorp.png";
import collins from "../static/sponsors/collins.png";
import costar from "../static/sponsors/costar.png";
import ga from "../static/sponsors/generalatomics.png";
import idea from "../static/sponsors/idea.png";
import intuit from "../static/sponsors/intuit.png";
import lockheed from "../static/sponsors/lockheedmartin.png";
import northrop from "../static/sponsors/northropgrumman.png";
import nutanix from "../static/sponsors/nutanix.png";
import onevigor from "../static/sponsors/onevigor.png";
import roblox from "../static/sponsors/roblox.png";
import salesforce from "../static/sponsors/salesforce.png";
import servicenow from "../static/sponsors/servicenow.png";
import twilio from "../static/sponsors/twilio.png";
import ucsdcse from "../static/sponsors/ucsdcse.png"; 
import janestreet from "../static/sponsors/janestreet.png"; 
import visa from "../static/sponsors/visa.png"; 
import "../styles/App.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';

class Sponsors extends React.Component {
  render() {
    return (
      <div>
        <Container className="white-background-section" id="sponsors-page">
          <Row>
            <Col id="sponsorsTitleMargin" md={12}>
              <h1 className="white-background-section">Sponsors</h1>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={arista} alt="arista networks"/>
              </div>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={bloomberg} alt="bloomberg"/>
              </div>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={boeing} alt="boeing"/>
              </div>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={braincorp} alt="brain corporation"/>
              </div>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={collins} alt="brain corporation"/>
              </div>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={costar} alt="brain corporation"/>
              </div>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={ga} alt="general atomics"/>
              </div>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={idea} alt="idea engineering student center"/>
              </div>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={intuit} alt="intuit"/>
              </div>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={janestreet} alt="jane street"/>
              </div>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={lockheed} alt="lockheed martin"/>
              </div>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={northrop} alt="northrop grumman"/>
              </div>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={nutanix} alt="nutanix"/>
              </div>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={onevigor} alt="one vigor"/>
              </div>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={roblox} alt="one vigor"/>
              </div>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={salesforce} alt="sales force"/>
              </div>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={servicenow} alt="service now"/>
              </div>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={twilio} alt="twilio"/>
              </div>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={ucsdcse} alt="ucsd cse computer science and engineering"/>
              </div>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={visa} alt="visa"/>
              </div>
            </Col>
          </Row>
          <Row id="sponsorsSpacing">
            <Col className="sponsors-learn-more" sm={4}>
              <Button
                type="primary"
                text="Learn More"
                toLink="https://drive.google.com/file/d/1xmvwlSVEuwmDheIDJdmArwhg_qUUoW_u/view?usp=sharing"
              />
            </Col>
            <Col className="sponsors-resume-database"sm={4}>
              <Button
                type="primary"
                text="Resume Database"
                toLink="https://airtable.com/shrfVnXweer0HRowp"
              />
            </Col>
            <Col className="sponsors-sponsor-us"sm={4}>
              <Button
                type="primary"
                text="Sponsor Us"
                toLink="https://docs.google.com/forms/d/e/1FAIpQLSdbzXPgOPNS8DYAYMxEEgzivRWd02_ojDv-9agyhM-8rr1wSQ/viewform"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Sponsors;
