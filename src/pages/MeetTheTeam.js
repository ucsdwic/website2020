import React from "react";
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import Member from "../components/Member.js";
import "../styles/App.scss";
import { all_members } from "../components/AllMembers";
import MemberPopup from "../components/MemberPopup";

class MeetTheTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: -1
    };
  }

  getModal = value => {
    console.log(document.getElementById("root"));
    document.getElementById("root").style.backgroundColor = "black";
    this.setState({
      showModal: value
    });
  };

  hideModal = value => {
    this.setState({
      showModal: -1
    });
  };

  render() {
    return (
      <div className="darkest-background-section">
        <Container>
          <Row>
            <Col className="darkest-background-section" sm={12} md={12}>
              <h1 className="teamTitle">Meet The Team</h1>
            </Col>
          </Row>

          <div className="members">
            <Row>
              {all_members.map((member, idx) => {
                return (
                  <>
                    <Col xs={6} sm={4} md={3}>
                      <div onClick={() => this.getModal(idx)}>
                        <Member name={member.name} position={member.position} />
                      </div>
                    </Col>
                    <MemberPopup
                      show={this.state.showModal === idx}
                      onHide={() => {
                        console.log("calling hide modal");
                        this.hideModal(idx);
                      }}
                      index={idx}
                    />
                  </>
                );
              })}
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default MeetTheTeam;
