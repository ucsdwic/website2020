import React from "react";
import { all_members } from "./AllMembers";
import { Row, Col } from "react-grid-system";

class MemberPopup extends React.Component {

    componentDidMount(){
        // document.querySelector(".member-popup").addEventListener("keyup", (event)=>{
        //     if (event.key === "Escape"){
        //         {this.props.onHide};
        //     }
        // })
    }
  render() {
    const index = this.props.index;
    return (
      <div className="lightest-background-section">
        {this.props.show && (
          <div className="member-popup">
            <button className="exitButton" onClick={this.props.onHide}> X </button>
            <Row>
              <Col md={6}>
                <img src={require("./demoPic.jpg")} />
              </Col>
                <Col className="member-popup-info" md={6}>
                  <div>
                    <h2>{all_members[index].name}</h2>
                    <h3>{all_members[index].position}</h3>
                    {/* <p>Grad Year: {all_members[index].year}</p> */}
                  </div>
                  <div className = "member-popup-bio">
                    <p>{all_members[index].bio}</p>
                  </div>
                </Col>
            </Row>
            <Row>
              <Col className="member-popup-socials" sm={12}>
                <p>*Insert Social Media Icons Here*</p>
              </Col>
            </Row>
          </div>
        )}
      </div>
    );
  }
}

export default MemberPopup;
