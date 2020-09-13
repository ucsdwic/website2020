import React from "react";
import "../styles/App.scss";

class Member extends React.Component {
  render() {
    return (
      <div className="members">
        <div className="member-wrapper">
          <div className="img-background"></div>
          <img className="memberImage" src={this.props.picture}></img>
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
