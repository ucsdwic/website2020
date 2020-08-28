import React from "react";
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import Member from "../components/Member.js";
import "../styles/App.scss";
import { all_members } from "../components/AllMembers";

class MeetTheTeam extends React.Component {
  render() {
    return (
      <div className="darkest-background-section">
        <Container>
          <Row>
            <Col className="darkest-background-section" sm={12} md={12}>
              <h1 className="teamTitle">Meet The Team</h1>
            </Col>
          </Row>

          <div className="members">
            <Row>
              {all_members.map(member => {
                return (
                  <Col sm={2}>
                    <Member name={member.name} position={member.position} />
                  </Col>
                );
              })}
            </Row>
            {/* <Container>
                        <Row>
                            <Col className="darkest-background-section" sm={4} md={2.4}>
                                <Member name = "Jaida" position = "Web-Development" />
                            </Col>
                            <Col className="darkest-background-section" sm={4} md={2.4}>
                                <Member name = "Jaida" position = "Web-Development" />
                            </Col>
                            <Col className="darkest-background-section" sm={4} md={2.4}>
                                <Member name = "Jaida" position = "Web-Development" />
                            </Col>
                            <Col className="darkest-background-section" sm={4} md={2.4}>
                                <Member name = "Jaida" position = "Web-Development" />
                            </Col>
                            <Col className="darkest-background-section" sm={4} md={2.4}>
                                <Member name = "Jaida" position = "Web-Development" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="darkest-background-section" sm={6} md={2.4}>
                                <Member name = "Jaida" position = "Web-Development" />
                            </Col>
                            <Col className="darkest-background-section" sm={6} md={2.4}>
                                <Member name = "Jaida" position = "Web-Development" />
                            </Col>
                            <Col className="darkest-background-section" sm={6} md={2.4}>
                                <Member name = "Jaida" position = "Web-Development" />
                            </Col>
                            <Col className="darkest-background-section" sm={6} md={2.4}>
                                <Member name = "Jaida" position = "Web-Development" />
                            </Col>
                            <Col className="darkest-background-section" sm={6} md={2.4}>
                                <Member name = "Jaida" position = "Web-Development" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="darkest-background-section" sm={6} md={2.4}>
                                <Member name = "Jaida" position = "Web-Development" />
                            </Col>
                            <Col className="darkest-background-section" sm={6} md={2.4}>
                                <Member name = "Jaida" position = "Web-Development" />
                            </Col>
                            <Col className="darkest-background-section" sm={6} md={2.4}>
                                <Member name = "Jaida" position = "Web-Development" />
                            </Col>
                            <Col className="darkest-background-section" sm={6} md={2.4}>
                                <Member name = "Jaida" position = "Web-Development" />
                            </Col>
                            <Col className="darkest-background-section" sm={6} md={2.4}>
                                <Member name = "Jaida" position = "Web-Development" />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="darkest-background-section" sm={6} md={3}>
                                <Member name = "Jaida" position = "Web-Development" />
                            </Col>
                            <Col className="darkest-background-section" sm={6} md={3}>
                                <Member name = "Jaida" position = "Web-Development" />
                            </Col>
                            <Col className="darkest-background-section" sm={6} md={3}>
                                <Member name = "Jaida" position = "Web-Development" />
                            </Col>
                            <Col className="darkest-background-section" sm={6} md={3}>
                                <Member name = "Jaida" position = "Web-Development" />
                            </Col>
                        </Row>
                    </Container> */}
          </div>
        </Container>
      </div>
    );
  }
}

export default MeetTheTeam;
