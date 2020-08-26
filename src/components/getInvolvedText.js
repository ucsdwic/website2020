import React from 'react';
import ReactDOM from 'react-dom';
import { setConfiguration, Row, Col, Container } from "react-grid-system";

class GetInvolvedText extends React.Component{
    render(){
        return (
        <div id="ContactUsParent">
          <div id="GetInvolvedNum" className="mid-background-section">
            <div> {this.props.number} </div>
          </div>
          <div>
            <h4>{this.props.title}</h4>
            <p>{this.props.description}</p>
            </div>
        </div>
        );
    }
}

export default GetInvolvedText;