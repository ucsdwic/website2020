import React from 'react';
import ReactDOM from 'react-dom';
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import amerEx from "./images/americanExpress.png";
import facebook from "./images/facebook.png";
import idea from "./images/idea.png";
import intuit from "./images/intuit.png";
import liveRamp from "./images/LiveRamp.png";
import microsoft from "./images/microsoft.png";
import oracle from "./images/oracle.png";
import salesForce from "./images/salesforce.png";
import serviceN from "./images/servicenow.png";
import twilio from "./images/twilio.png";
import yahoo from "./images/yahoo.png";

class Sponsors extends React.Component{
    render(){
        return (
            <div className="white-background-section">
                <Container>
                <Row>
                    <Col md={12}> 
                    <h1 className="white-background-section">Sponsors</h1>
                    </Col>
                    <Col md={3}> 
                    <div ></div>
                    </Col>
                    <Col md={3}> 
                    <div >
                    </div>
                    </Col>
                    <Col md={3}> 
                    <div >
                    </div>
                    </Col>
                    <Col md={3}>
                    <div >
                    </div>
                    </Col>
                    <Col md={3}> 
                    <div ></div>
                    </Col>
                    <Col md={3}> 
                    <div >
                    </div>
                    </Col>
                    <Col md={3}> 
                    <div >
                    </div>
                    </Col>
                    <Col md={3}>
                    <div >
                    </div>
                    </Col>
                    <Col md={3}> 
                    <div ></div>
                    </Col>
                    <Col md={3}> 
                    <div>
                    </div>
                    </Col>
                    <Col md={3}> 
                    <div>
                    </div>
                    </Col>
                    <Col md={3}>
                    <div>
                    </div>
                    </Col>
                    <Col md={3}> 
                    <div>
                    </div>
                    </Col>
                    <Col md={3}>
                    <div>
                    </div>
                    </Col>
                </Row>
            </Container>
            </div>

        )
    }
}

export default Sponsors;