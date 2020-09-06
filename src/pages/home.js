import React from 'react';
import ReactDOM from 'react-dom';
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import GroupPic from "../static/homeOverlay.png";
import Button from "../components/Button";
import LogoCenter from "../static/LogoCenterHome.png";

class Home extends React.Component{
    render(){
        return (
        <div id="homeImage">
            {/* <img src={GroupPic} alt="GroupPicture"/> */}

            <Container id="homeCenterContainer">
                <Row >
                    <Col id="homeCenterLogo" md={12}>
                        <img src={LogoCenter} alt="Wic Logo"/>
                    </Col>
                    <Col id="homeCenterText" md={12}>
                        <div>Women in Computing @ UC San Diego</div>
                    </Col>
                    <Col id="homeCenterButton" md={12}>
                        <Button type="homeButtons" text = "Join Us" toLink = "https://google.com" />
                    </Col>
                </Row>
            </Container>

        </div>
        )
    }
}

export default Home;