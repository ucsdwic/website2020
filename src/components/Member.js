import React from 'react';
import "../styles/App.scss";

class Member extends React.Component {
    render() {
        return (
            <div>
                <img className="memberImage" src={require("./demoPic.jpg")}></img>
                <div className="teamImageBg"></div>
                <div className = "teamInfo">
                    <h6 className = "teamName" > {this.props.name} </h6>
                    <p className = "teamPosition" > {this.props.position} </p>
                </div>
            </div>
        )
    }
}

export default Member;