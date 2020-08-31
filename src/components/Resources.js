import React from "react";
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import "../styles/App.scss";

class Resources extends React.Component {

  render() {
    return (
        <div className="darkest-background-section">
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <h1 className="teamTitle">Resources</h1>
                    </Col>
                </Row>
                <Row>
                    <Col class="toggle-tab">
                        <button class="tablinks" onclick="openResource(event, 'Newsletters')">Newsletters</button>
                        <button class="tablinks" onclick="openResource(event, 'Scholarships')">Scholarships</button>
                        <button class="tablinks" onclick="openResource(event, 'Conferences')">Conferences</button>
                        <button class="tablinks" onclick="openResource(event, 'Our Alumni')">Our Alumni</button>
                        <button class="tablinks" onclick="openResource(event, 'Similar Orgs')">Similar Orgs</button>
                    </Col>
                </Row>
            </Container>
        </div>

    );
  }
  
}

export default Resources;
