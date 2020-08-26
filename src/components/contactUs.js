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
                    <div id="ContactUsParent"><div id="ContactUsMailFacebook"><MdMailOutline/></div> <div>{email}</div> </div>
                    </Col>
                    <Col id="ContactUsText" className="lightest-background-section" md={6}> 
                    <div id="ContactUsParent">
                        <div id="ContactUsMailFacebook"> <FaFacebookSquare/></div> 
                        <div> <a href={facebook}> Facebook</a></div>
                    </div>
                    </Col>
                    <Col id="ContactUsText" className="lightest-background-section" md={6}> 
                    <div id="ContactUsParent">
                        <div id="ContactUsLinkedInsta"> <FaLinkedin/></div>
                        <div> <a href={linkedIn}> LinkedIn</a></div>
                    </div>
                    </Col>
                    <Col id="ContactUsText" className="lightest-background-section" md={6}>
                    <div id="ContactUsParent">
                        <div id="ContactUsLinkedInsta"> <FaInstagram/></div>
                        <div> <a href={insta}> Instagram</a></div>
                    </div>
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