import React from 'react';
import ReactDOM from 'react-dom';
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import { MdMailOutline } from 'react-icons/md';
import { FaFacebookSquare, FaInstagram, FaLinkedin} from 'react-icons/fa';

class ContactUs extends React.Component{
    render(){
        const email = "wic.ucsd@gmail.com";
        const facebook = "https://www.facebook.com/groups/wicucsd/";
        const linkedIn = "https://www.linkedin.com/company/wicucsd/about/";
        const insta = "https://www.instagram.com/wicucsd/";
        return (
            <div className="lightest-background-section">
                <Container>
                <Row>
                    <Col id="ContactUsTitle" className="lightest-background-section" md={12}> 
                    <h1 className="lightest-background-section">Contact Us</h1>
                    </Col>
                    <Col id="ContactUsText" className="lightest-background-section" md={6}> 
                    <div> <MdMailOutline/> {email} </div>
                    </Col>
                    <Col id="ContactUsText" className="lightest-background-section" md={6}> 
                    <a href={facebook}> <FaFacebookSquare/> Facebook</a>
                    </Col>
                    <Col id="ContactUsText" className="lightest-background-section" md={6}> 
                    <a href={linkedIn}> <FaLinkedin/> LinkedIn</a>
                    </Col>
                    <Col id="ContactUsText" className="lightest-background-section" md={6}>
                    <a href={insta}> <FaInstagram/> Instagram</a>
                    </Col>
                    <Col id="Trademark" className="lightest-background-section" md={12}>
                        <p> © Women in Computing at University of California, San Diego 2020 </p>
                    </Col>
                </Row>
            </Container>
            </div>

        )
    }
}

export default ContactUs;