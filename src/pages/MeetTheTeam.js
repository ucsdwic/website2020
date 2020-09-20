import React from "react";
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import Member from "../components/Member.js";
import { all_members } from "../components/AllMembers";
import MemberPopup from "../components/MemberPopup";
import "../styles/MeetTheTeam.scss";


class MeetTheTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: -1
    };
  }

  getModal = value => {
    document.getElementById("opaque-filler").style.display = "block";
    this.setState({
      showModal: value
    });
  };

  hideModal = value => {
    document.getElementById("opaque-filler").style.display = "none";
    this.setState({
      showModal: -1
    });
  };

  render() {
    return (
      <>
        <div id="opaque-filler"></div>
        <div className="darkest-background-section" id="meet-the-team-page">
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
                    <React.Fragment key={member.name}>
                      <Col xs={6} sm={4} md={3} key = {idx}>
                        <div onClick={() => this.getModal(idx)}>
                          <Member
                            picture={member.picture}
                            name={member.name}
                            position={member.position}
                          />
                        </div>
                      </Col>
                      <MemberPopup
                        show={this.state.showModal === idx}
                        onHide={() => {
                          this.hideModal(idx);
                        }}
                        index={idx}
                      />
                    </React.Fragment>
                  );
                })}
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default MeetTheTeam;
