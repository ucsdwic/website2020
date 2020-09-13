import React from "react";
import { all_members } from "./AllMembers";
import { Row, Col } from "react-grid-system";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

class MemberPopup extends React.Component {
  constructor(props) {
    super(props);
    this.memberRef = React.createRef();
  }

  componentDidMount() {
    // this.positionMember();
  }

  positionMember() {
    // if (this.memberRef) {
    //   console.log(this.memberRef.current);
    // }
  }

  render() {
    const index = this.props.index;
    return (
      <>
        <div className="lightest-background-section">
          {this.props.show && (
            <div
              className="member-popup"
              ref={this.memberRef}
              onLoad={this.positionMember}
            >
              <button className="exitButton" onClick={this.props.onHide}>
                {" "}
                X{" "}
              </button>
              <Row justify="center" type="flex">
                <Col xs={10} md={4}>
                  <img src={all_members[index].picture} />
                </Col>
                <Col xs={10} className="member-popup-info" md={6}>
                  <div>
                    <h2>{all_members[index].name}</h2>
                    <h3>{all_members[index].position}</h3>
                    <p>{all_members[index].year}</p>
                    <p>{all_members[index].bio}</p>
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
