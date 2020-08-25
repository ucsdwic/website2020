import React from 'react';
import ReactDOM from 'react-dom';
import { setConfiguration, Row, Col, Container } from "react-grid-system";

class GetInvolvedText extends React.Component{
    render(){
        return (
        <div>
        <Container>
        <Row>
          <Col id="GetInvolvedNum" className="mid-background-section" md={3}>
            <div> {this.props.number} </div>
          </Col>
          <Col  md={9}>
            <h4>{this.props.title}</h4>
            <p>{this.props.description}</p>
            </Col>
        </Row>
        </Container>
        </div>
        );
    }
}

export default GetInvolvedText;