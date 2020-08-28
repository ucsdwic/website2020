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
            <Row>
              <Col sm={6}>
                <img src={require("./demoPic.jpg")} />
              </Col>
              <Col sm={6}>
                <h4>{index}</h4>
                <h2>{all_members[index].name}</h2>
                <button onClick={this.props.onHide}> Hide </button>
              </Col>
            </Row>
          </div>
        )}
      </div>
    );
  }
}

export default MemberPopup;
