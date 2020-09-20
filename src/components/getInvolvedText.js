import React from 'react';
import ReactDOM from 'react-dom';
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import "../styles/GetInvolved.scss";

class GetInvolvedText extends React.Component{
    render(){
        return (
        <div id="ContactUsParent">
          <div id="GetInvolvedNum" className="mid-background-section">
            <div> {this.props.number} </div>
          </div>
          <div>
            <h3 className="involve-title">{this.props.title}</h3>
            <p>{this.props.description}</p>
            <p>{this.props.link}</p>
            </div>
        </div>
        );
    }
}

export default GetInvolvedText;