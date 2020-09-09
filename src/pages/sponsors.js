import React from 'react';
import ReactDOM from 'react-dom';
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import Button from "../components/Button";
import amerEx from "../static/amerexp.png"
import facebook from "../static/facebook.png";
import idea from "../static/idea.png";
import intuit from "../static/intuit.png";
import liveramp from "../static/liveramp.png";
import microsoft from "../static/microsoft.png";
import oracle from "../static/oracle.png";
import salesforce from "../static/salesforce.png";
import servicenow from "../static/servicenow.png";
import twilio from "../static/twilio.png";
import yahoo from "../static/yahoo2.png";
import cisco from "../static/cisco.png";
import qualcomm from "../static/qualcomm.png";
import firefox from "../static/firefox2.png";

class Sponsors extends React.Component{
    render(){
        return (
            <div>
                <Container className="white-background-section">
                <Row>
                    <Col id="sponsorsTitleMargin" md={12}> 
                    <h1 className="white-background-section">Sponsors</h1>
                    </Col>
                    <Col id="logoMargin" xs={6} md={3}> 
                    <div >
                        <img src={firefox} alt="firefox"/>
                    </div>
                    </Col>
                    <Col id="logoMargin" xs={6} md={3}> 
                    <div >
                        <img src={yahoo} alt="yahoo"/>
                    </div>
                    </Col>
                    <Col id="logoMargin" xs={6} md={3}> 
                    <div >
                        <img src={facebook} alt="facebook"/>
                    </div>
                    </Col>
                    <Col id="logoMargin" xs={6} md={3}>
                    <div >
                        <img src={qualcomm} alt="qualcomm"/>
                    </div>
                    </Col>
                    <Col id="logoMargin" xs={6} md={3}> 
                    <div>
                        <img src={oracle} alt="oracle"/>
                    </div>
                    </Col>
                    <Col id="logoMargin" xs={6} md={3}> 
                    <div>
                        <img src={intuit} alt="intuit"/>
                    </div>
                    </Col>
                    <Col id="logoMargin" xs={6} md={3}> 
                    <div>
                        <img src={microsoft} alt="microsoft"/>
                    </div>
                    </Col>
                    <Col id="logoMargin" xs={6} md={3}>
                    <div >
                        <img src={cisco} alt="cisco"/>
                    </div>
                    </Col>
                    <Col id="logoMargin" xs={6} md={3}> 
                    <div>
                        <img src={servicenow} alt="service now"/>
                    </div>
                    </Col>
                    <Col id="logoMargin" xs={6} md={3}> 
                    <div>
                        <img src={twilio} alt="twilio"/>
                    </div>
                    </Col>
                    <Col id="logoMargin" xs={6} md={3}> 
                    <div>
                        <img src={salesforce} alt="sales force"/>
                    </div>
                    </Col>
                    <Col id="logoMargin" xs={6} md={3}>
                    <div>
                        <img src={amerEx} alt="american express"/>
                    </div>
                    </Col>
                    <Col id="logoMargin" xs={6} md={3}> 
                        <div>
                            <img src={idea} alt="idea engineering student center"/>
                        </div>
                    </Col>
                    <Col id="logoMargin" xs={6} md={3}>
                        <div>
                            <img src={liveramp} alt="live ramp"/>
                        </div>
                    </Col>
                   
                </Row>
                <Row>
                    <Col id="learnMoreButton" md={6}>
                        <Button type="primary" text = "Learn More" toLink = "https://drive.google.com/file/d/1nuMtyG3DIZsTHyIa19-hLOzgUnEWIHvN/view?usp=sharing" />
                    </Col>
                    <Col id="sponsorUsButton" md={6}>
                        <Button type="primary" text = "Sponsor Us" toLink = "https://docs.google.com/forms/d/1IjNFhuCIBFjEi8MDoGm7ovmZOo-izW3Ai4k6Cr1AF_g/edit" />
                    </Col>
                    <Col md={12}>
                    </Col>
                </Row>
            </Container>
            </div>

        )
    }
}

export default Sponsors;