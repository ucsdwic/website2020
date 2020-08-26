import React from 'react'
import "../styles/App.scss";

class AboutUsSection extends React.Component {
    render(){
        const PropIcon = this.props.icon
        return(
            <div className="mid-background-section">
                <div id = "about-us-icon">
                    <PropIcon/>
                </div>
                <h6 id="about-us-icon-title">{this.props.title}</h6>
                <p id="about-us-description">{this.props.description}</p>
            </div>
        )

    }
}
export default AboutUsSection