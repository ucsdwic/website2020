import React from 'react';
import ReactDOM from 'react-dom';
import GetInvolvedText from "./getInvolvedText.js";
import { setConfiguration, Row, Col, Container } from "react-grid-system";

class GetInvolved extends React.Component{
    render(){
        const mentorTitle = "MENTOR-MENTEE";
        const mentorDescrip = "Click on me for more info!";
        const mentorNum = "1";
        const bpcTitle = "BEGINNERS PROGRAMMING COMPETITION";
        const bpcDescrip = "ITS BPC";
        const bpcNum = "2";
        const edgeTitle = "EGDE";
        const edgeDescrip = "its edge-y";
        const edgeNum = "3";
        const socialTitle = "SOCIALS";
        const socialDescrip = "this is the best not biased";
        const socialNum = "4";
        return (
            <div className="mid-background-section">
            <Container>
                <Row>
                    <Col id="GetInvolvedMargin" className="mid-background-section" md={12}> 
                    <h1 className="mid-background-section">Get Involved</h1>
                    </Col>
                    <Col id="GetInvolvedMentorBPC" className="mid-background-section" md={6}> 
                    <GetInvolvedText title={mentorTitle} 
                        description={mentorDescrip} number={mentorNum}/>
                    </Col>
                    <Col id="GetInvolvedMentorBPC" className="mid-background-section" md={6}> 
                    <GetInvolvedText title={bpcTitle} 
                        description={bpcDescrip} number={bpcNum}/>
                    </Col>
                    <Col id="GetInvolvedEdgeSocials" className="mid-background-section" md={6}> 
                    <GetInvolvedText title={edgeTitle} 
                        description={edgeDescrip} number={edgeNum}/>
                    </Col>
                    <Col id="GetInvolvedEdgeSocials" className="mid-background-section" md={6}> 
                    <GetInvolvedText title={socialTitle} 
                        description={socialDescrip} number={socialNum}/>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default GetInvolved;