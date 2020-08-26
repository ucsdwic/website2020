import React from 'react'
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import "../styles/App.scss";
import {FaMoneyCheckAlt} from 'react-icons/fa'
import {RiComputerFill} from 'react-icons/ri'
import {GiGraduateCap} from 'react-icons/gi'
import {AiFillTrophy} from 'react-icons/ai'
import AboutUsSection from "./AboutUsSection"
class AboutUs extends React.Component {
    render(){
        return(
            <div className="mid-background-section" id="about-us-page">
                <Container>
                    <Row>
                        <Col>
                            <h1>About Us</h1>
                            <p id="about-us-blurb">We're coders and engineers - both women and men - who support the female presence in computing. We run events, from tech talks to socials, and provide opportunities for female engineers to connect and succeed.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={3} lg={3}>
                            <AboutUsSection icon = {RiComputerFill} 
                                            title = "Industry Events"
                                            description= "WIC has industry professionals hold tech talks on campus, including all-female engineer panels. Bring your resumes!"/>
                        </Col>
                        <Col sm={12} md={3} lg={3}>
                            <AboutUsSection icon = {GiGraduateCap} 
                                            title = "Grad School Prep"
                                            description = "WIC holds events and panels that give students resources for planning the next steps in their educational career."/>
                        </Col>
                        <Col sm={12} md={3} lg={3}>
                            <AboutUsSection icon = {FaMoneyCheckAlt} 
                                            title = "Scholarships"
                                            description = "WIC sponsors women to attend the annual Grace Hopper Conference and Tapia Celebration."/>
                        </Col>
                        <Col sm={12} md={3} lg={3}>
                            <AboutUsSection icon = {AiFillTrophy} 
                                            title = "Coding Competitions"
                                            description = "Every quarter, WIC holds the Beginner's Programming Competition, restricted to students who have yet to take upper division classes."/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )

    }
}
export default AboutUs