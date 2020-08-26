import React from "react";
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import Member from "../components/Member.js";
import "../styles/App.scss";


class MeetTheTeam extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col className="darkest-background-section" sm={12} md={12}>
                            <h1 className="teamTitle">Meet The Team</h1>
                        </Col>
                    </Row>
                </Container>
                <div className="members">
                    <Container>
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
                    </Container>
                </div>
            </div>
        )
    }
}

export default MeetTheTeam;
