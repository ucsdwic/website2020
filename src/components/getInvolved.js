import React from "react";
import ReactDOM from "react-dom";
import GetInvolvedText from "./getInvolvedText.js";
import { setConfiguration, Row, Col, Container } from "react-grid-system";

class GetInvolved extends React.Component {
  render() {
    const mentorTitle = "MENTOR-MENTEE";
    const mentorDescrip = "Our mentorship program is meant to offer a support system for junior women in computing. It is a great way to find inspiration, network with other women in CS, and find your niche in WIC’s community.";
    const mentorNum = "1";
    const bpcTitle = "BPC";
    const bpcDescrip = "Beginner's Programming Competition is an algorithmic problem solving competition open only to students who have yet to take upper division classes. Held every quarter, BPC is a fun way to prep for your next hackathon.";
    const bpcNum = "2";
    const edgeTitle = <a href='https://edgeucsd.wixsite.com/edge' target="_blank"> EDGE </a> ;
    const edgeDescrip = "WIC partners with Society of Women Engineers to offer EDGE, a program for high school students. Participants are paired with an undergraduate mentor and attend various engineering workshops!" ;
    const edgeNum = "3";
    const socialTitle = "EVENTS";
    const socialDescrip = "WIC hosts a variety of events. From tech talks that offer an opportunity to network with companies, to fun interactive socials, to workshops helping refine technical skills, there's something for everyone!";
    const socialNum = "4";
    return (
      <div className="mid-background-section" id="involvement-page">
        <Container className="getInvolved">
          <Row>
            <Col
              id="GetInvolvedMargin"
              className="mid-background-section"
              md={12}
            >
              <h1 className="mid-background-section">Get Involved</h1>
            </Col>
            <Col
              id="GetInvolvedMentorBPC"
              className="mid-background-section"
              md={6}
            >
              <GetInvolvedText
                title={mentorTitle}
                description={mentorDescrip}
                number={mentorNum}
              />
            </Col>
            <Col
              id="GetInvolvedMentorBPC"
              className="mid-background-section"
              md={6}
            >
              <GetInvolvedText
                title={bpcTitle}
                description={bpcDescrip}
                number={bpcNum}
              />
            </Col>
            <Col
              id="GetInvolvedEdgeSocials"
              className="mid-background-section"
              md={6}
            >
              <GetInvolvedText
                title={edgeTitle}
                description= {edgeDescrip}
                number={edgeNum}
              />
            </Col>
            <Col
              id="GetInvolvedEdgeSocials"
              className="mid-background-section"
              md={6}
            >
              <GetInvolvedText
                title={socialTitle}
                description={socialDescrip}
                number={socialNum}
              />
            </Col>
            <Col
              id="GetInvolvedBottom"
              className="mid-background-section"
              md={12}
            ></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default GetInvolved;
