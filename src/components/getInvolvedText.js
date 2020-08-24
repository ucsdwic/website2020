import React from 'react';
import ReactDOM from 'react-dom';
import { setConfiguration, Row, Col, Container } from "react-grid-system";

class GetInvolvedText extends React.Component{
    render(){
        return (
        <div>
        <Container>
        <Row>
          <Col id="GetInvolvedNum" className="mid-background-section" md={2}>
            <h1> {this.props.number} </h1>
          </Col>
          <Col className="mid-background-section" md={10}>
            <h4 className="mid-background-section">{this.props.title}</h4>
            <p className="mid-background-section">{this.props.description}</p>
            </Col>
        </Row>
        </Container>
        </div>
        );
    }
}

export default GetInvolvedText;