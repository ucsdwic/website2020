import React from 'react'
import { setConfiguration, Row, Col, Container } from "react-grid-system";
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
                            <div id="join-us-quote-icon">
                                <ImQuotesLeft/>
                                <p id="join-us-quote">if you teach <strong id="quote-bold">one girl</strong> how to code, she will <strong id="quote-bold">teach three</strong></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default JoinUs