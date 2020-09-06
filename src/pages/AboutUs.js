import React from "react";
import { Row, Col, Container } from "react-grid-system";
import "../styles/App.scss";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { GiGraduateCap } from "react-icons/gi";
import { AiFillTrophy } from "react-icons/ai";
import AboutUsSection from "../components/AboutUsSection";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="mid-background-section" id="about-us-page">
        <Container>
          <Row>
            <Col>
              <h1>About Us</h1>
              <p id="about-us-blurb">
                We're coders and engineers - both women and men - who support
                the female presence in computing. We run events, from tech talks
                to socials, and provide opportunities for female engineers to
                connect and succeed.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={3}>
              <AboutUsSection icon={RiComputerFill} title="Industry Events" />
            </Col>
            <Col sm={6} md={3}>
              <AboutUsSection icon={GiGraduateCap} title="Grad School Prep" />
            </Col>
            <Col sm={6} md={3}>
              <AboutUsSection icon={FaMoneyCheckAlt} title="Scholarships" />
            </Col>
            <Col sm={6} md={3}>
              <AboutUsSection icon={AiFillTrophy} title="Coding Competitions" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default AboutUs;
