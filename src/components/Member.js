import React from "react";
import "../styles/MeetTheTeam.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';

class Member extends React.Component {
  render() {
    return (
      <div className="members">
        <div className="member-wrapper">
          <div className="img-background"></div>
          <LazyLoadImage className="memberImage" src={this.props.picture} alt={this.props.name} effect="blur"/>
        </div>
        <div className="teamImageBg"></div>
        <div className="teamInfo">
          <h4 className="teamName">
            <b> {this.props.name}</b>{" "}
          </h4>
          <p className="teamPosition"> {this.props.position} </p>
        </div>
      </div>
    );
  }
}

export default Member;
