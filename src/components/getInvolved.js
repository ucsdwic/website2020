import React from "react";
import ReactDOM from "react-dom";
import GetInvolvedText from "./getInvolvedText.js";
import { setConfiguration, Row, Col, Container } from "react-grid-system";

class GetInvolved extends React.Component {
  render() {
    const mentorTitle = "MENTOR-MENTEE";
    const mentorDescrip =
      "WIC has multiple mentorship programs and hosts various social events  to allow members to network with one another and find a supportive community. ";
    const mentorNum = "1";
    const bpcTitle = "BPC";
    const bpcDescrip =
      "This is one of Women in Computing’s most highly attended events, and is a great way to connect with top rising talent! What is the Beginner Programming Competition? ";
    const bpcNum = "2";
    const edgeTitle = "EDGE";
    const edgeDescrip =
      "As a collaboration between WIC and the UCSD chapter of Society of Women Engineers, EDGE is a mentorship program for high school girls. ";
    const edgeNum = "3";
    const socialTitle = "EVENTS";
    const socialDescrip = "this is the best not biased";
    const socialNum = "4";
    return (
      <div className="mid-background-section" id="involvement-page">
        <Container>
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
                description={edgeDescrip}
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
