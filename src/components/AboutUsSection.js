import React from 'react'
import "../styles/AboutUs.scss";

class AboutUsSection extends React.Component {
    render(){
        const PropIcon = this.props.icon
        return(
            <div className="mid-background-section">
                <div id = "about-us-icon">
                    <PropIcon/>
                </div>
                <h4 id="about-us-icon-title">{this.props.title}</h4>
            </div>
        )

    }
}
export default AboutUsSection