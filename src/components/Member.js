import React from 'react';
import "../styles/App.scss";

class Member extends React.Component {
    render() {
        return (
            <div>
                <img className="memberImage" src="./demoPic.jpg" width="100" height="100"></img>
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