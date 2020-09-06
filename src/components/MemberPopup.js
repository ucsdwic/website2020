import React from "react";
import { all_members } from "./AllMembers";
import { Row, Col } from "react-grid-system";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

class MemberPopup extends React.Component {
  render() {
    const index = this.props.index;
    return (
      <>
        <div className="lightest-background-section">
          {this.props.show && (
            <div className="member-popup">
              <button className="exitButton" onClick={this.props.onHide}>
                {" "}
                X{" "}
              </button>
              <Row justify="center" type="flex">
                <Col xs={10} md={4}>
                  <img src={require("./demoPic.jpg")} />
                </Col>
                <Col xs={10} className="member-popup-info" md={6}>
                  <div>
                    <h2>{all_members[index].name}</h2>
                    <h3>{all_members[index].position}</h3>
                    {/* <p>Grad Year: {all_members[index].year}</p> */}
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                      {all_members[index].bio}
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="member-popup-socials">
                  <a href={all_members[index].github} target="_blank">
                    <FaGithub />
                  </a>
                  <a href={all_members[index].linkedin} target="_blank">
                    <FaLinkedinIn />
                  </a>
                  <a href={all_members[index].instagram} target="_blank">
                    <FaInstagram />
                  </a>
                </Col>
              </Row>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default MemberPopup;
