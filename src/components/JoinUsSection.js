import React from 'react'
import "../styles/JoinUs.scss";

class JoinUsSection extends React.Component {
    render(){
        const PropIcon = this.props.icon
        return(
            <div className="mid-background-section">
                <div id = "join-us-icon">
                    <PropIcon/>
                </div>
                <p id="join-us-icon-title">{this.props.title}</p>
            </div>
        )

    }
}
export default JoinUsSection