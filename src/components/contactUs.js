import React from "react";
import ReactDOM from "react-dom";
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import { MdMailOutline } from "react-icons/md";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";

class ContactUs extends React.Component {
  render() {
    const email = "wic.ucsd@gmail.com";
    const facebook = "https://www.facebook.com/groups/wicucsd/";
    const linkedIn = "https://www.linkedin.com/company/wicucsd/about/";
    const insta = "https://www.instagram.com/wicucsd/";
    const medium = "https://medium.com/the-innovation/recap-women-in-computings-summer-dev-program-87b25a3a511f";
    return (
      <div className="lightest-background-section" id="contact-us-page">
        <Container className="contactUsLinks">
          <Row>
            <Col
              id="ContactUsTitle"
              className="lightest-background-section"
              md={12}
            >
              <h1 className="lightest-background-section">Contact Us</h1>
            </Col>
          </Row>
          {/* <Col
              id="ContactUsText"
              className="lightest-background-section"
              md={6}
            >
              <div id="ContactUsParent">
                <div id="ContactUsMailFacebook">
                  <MdMailOutline />
                </div>
                <div>
                  <a href="mailto:wic.ucsd@gmail.com">{email}</a>
                </div>
              </div>
            </Col>
            <Col id="ContactUsText" md={6}>
              <div id="ContactUsParent">
                <div id="ContactUsMailFacebook">
                  <FaFacebookSquare />
                </div>
                <div>
                  <span style={{ display: "none" }}>
                    This tab will open on another screen
                  </span>
                  <a href={facebook} target="_blank">
                    Facebook
                  </a>
                </div>
              </div>
            </Col>
            <Col id="ContactUsText" md={6}>
              <div id="ContactUsParent">
                <div id="ContactUsLinkedInsta">
                  <span style={{ display: "none" }}>
                    This tab will open on another screen
                  </span>
                  <FaLinkedin />
                </div>
                <div>
                  <span style={{ display: "none" }}>
                    This tab will open on another screen
                  </span>
                  <a href={linkedIn} target="_blank">
                    LinkedIn
                  </a>
                </div>
              </div>
            </Col>
            <Col id="ContactUsText" md={6}>
              <div id="ContactUsParent">
                <div id="ContactUsLinkedInsta">
                  <span style={{ display: "none" }}>
                    This tab will open on another screen
                  </span>
                  <FaInstagram />
                </div>
                <div>
                  <span style={{ display: "none" }}>
                    This tab will open on another screen
                  </span>
                  <a href={insta} target="_blank">
                    Instagram
                  </a>
                </div>
              </div>
            </Col> */}
          <Row type="flex" justify="center" gutterWidth={20}>
          <Col className="contact-info" xs={12} md={2}>
            <a href="mailto:wic.ucsd@gmail.com">
              <MdMailOutline/>
              <h6>wic.ucsd@gmail.com</h6>
              </a>
            </Col>
            <Col className="contact-info" xs={12} md={2}>
            <a href={facebook} target="_blank">
              <FaFacebookSquare/>
              <h6>WICUCSD</h6>
            </a>
            </Col>
            <Col className="contact-info" xs={12} md={2}>
            <a href={linkedIn} target="_blank">
              <FaLinkedin/>
              <h6>WICUCSD</h6>
              </a>
            </Col>
            <Col className="contact-info" xs={12} md={2}>
            <a href={medium} target="_blank">
              <FaMedium />
              <h6>Coming Soon!</h6>
              </a>
            </Col>
            <Col className="contact-info" xs={12} md={2}>
            <a href={insta} target="_blank">
              <FaInstagram />
              <h6>@wicucsd</h6>
            </a>
            </Col>
            
          </Row>
          <Row>
            <Col id="Trademark" md={12}>
              <p>
                {" "}
                © <b>Women in Computing</b> at University of California, San
                Diego 2020{" "}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ContactUs;
