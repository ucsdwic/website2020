import React from 'react'
import { Row, Col, Container } from "react-grid-system";
import "../styles/App.scss";
import {ImQuotesLeft} from 'react-icons/im'

class JoinUs extends React.Component{
    render(){
        return(
            <div className="mid-background-section" id="join-us-page">
                <Container>
                    <Row>
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
            </div>
        )
    }
}
export default JoinUs