import React from 'react'
import { Row, Col, Container } from "react-grid-system";
import "../styles/JoinUs.scss";
import {ImQuotesLeft} from 'react-icons/im'
import PhotoGallery from '../components/PhotoGallery.js'
import Button from "../components/Button";
import "../styles/App.scss";

import { IoIosPaper } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { FaVoteYea } from "react-icons/fa";
import { FiKey } from "react-icons/fi";
import JoinUsSection from "../components/JoinUsSection";


class JoinUs extends React.Component{
    render(){
        return(
            <div className="mid-background-section" id="join-us-page">
                <Container>
                    <Row id="join-us-title">
                        <Col>
                            <h1>Join Us</h1>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col xs={10} md={9}>
                            <div id="join-us-body">
                                <div id="join-us-quote-icon">
                                    <ImQuotesLeft/>
                                </div>
                                <p id="join-us-quote">if you teach <span id="quote-bold">&nbsp;one girl&nbsp;</span> how to code, she will <span id="quote-bold">&nbsp;teach three&nbsp;</span>.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div id="photo-gallery">
                    <PhotoGallery />
                </div>
                <Container>
                    <Row justify="center">
                        <Col xs={10} md={9}>
                            <div id="join-us-body">
                                <h3 id="active-member-blurb">The <span id="quote-bold">&nbsp;benefits&nbsp;</span> of becoming an <span id="quote-bold">&nbsp;active member&nbsp;</span>:</h3>
                            </div>
                        </Col>
                    </Row>
                    <Row className="join-us-icons">
                        <Col sm={6} md={3}>
                            <JoinUsSection icon={IoIosPaper} title="Resume in the WIC sponsor database." />
                        </Col>
                        <Col sm={6} md={3}>
                            <JoinUsSection icon={FaDollarSign} title="Priority for scholarships to conferences." />
                        </Col>
                        <Col sm={6} md={3}>
                            <JoinUsSection icon={FaVoteYea} title="Ability to apply & vote for board positions." />
                        </Col>
                        <Col sm={6} md={3}>
                            <JoinUsSection icon={FiKey} title="Access to member-only events." />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row justify="center" align="center">
                        <Col className="join-us-active-member" xs={12} xl={4}>
                            <Button
                                type="secondary"
                                text="Join our membership"
                                toLink="https://docs.google.com/forms/d/e/1FAIpQLScsf3G_eeySKZ_8dhYSUFtQmUNnFwa__rVOOBnrvium5lIAjQ/viewform"
                            />
                        </Col>
                        <Col className="join-us-mailing-list" xs={12} xl={4}>
                            <Button
                                type="secondary"
                                text="Join our mailing list"
                                toLink="https://docs.google.com/forms/d/e/1FAIpQLScV5bxCkSR5kxkREJZsrmAw5ldz_a5X2WNMyKIDUzsszKuDNA/viewform"
                            />
                        </Col>
                        <Col className="join-us-discord" xs={12} xl={4}>
                            <Button
                                type="secondary"
                                text="Join our Discord"
                                toLink="https://discord.gg/ZE62Zuh"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default JoinUs