import React from "react";
import ReactDOM from "react-dom";
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import Button from "../components/Button";
import bloomberg from "../static/sponsors/bloomberg.png";
import braincorp from "../static/sponsors/braincorp.png";
import idea from "../static/sponsors/idea.png";
import intuit from "../static/sponsors/intuit.png";
import nutanix from "../static/sponsors/nutanix.png";
import salesforce from "../static/sponsors/salesforce.png";
import servicenow from "../static/sponsors/servicenow.png";
import twilio from "../static/sponsors/twilio.png";
import ucsdcse from "../static/sponsors/ucsdcse.png"; 
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
                <LazyLoadImage src={bloomberg} alt="bloomberg"/>
              </div>
            </Col>
            <Col id="logoMargin" xs={6} md={3}>
              <div>
                <LazyLoadImage src={braincorp} alt="brain corporation"/>
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
                <LazyLoadImage src={nutanix} alt="nutanix"/>
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
          </Row>
          <Row id="sponsorsSpacing">
            <Col className="sponsors-learn-more" sm={4}>
              <Button
                type="primary"
                text="Learn More"
                toLink="https://drive.google.com/file/d/1nuMtyG3DIZsTHyIa19-hLOzgUnEWIHvN/view?usp=sharing"
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
                toLink="https://docs.google.com/forms/d/e/1FAIpQLSejVFhp4Fm8fsrZqwKnKlapxIWiBjyFgB0DM_xHIEzaenp_zA/viewform"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Sponsors;
