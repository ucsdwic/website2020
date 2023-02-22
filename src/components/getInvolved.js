import React from "react";
import ReactDOM from "react-dom";
import GetInvolvedText from "./getInvolvedText.js";
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import "../styles/GetInvolved.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../styles/App.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import servicenow from "../static/sponsors/servicenow.png";
import sp22 from "../static/board-members/bpc_sp22.png";

class GetInvolved extends React.Component {
  render() {
    const mentorTitle = <a href='https://forms.gle/mqZjNG6VucbnSX5D8' target="_blank"> MENTOR-MENTEE </a> ;
    const mentorDescrip = "Our mentorship program is meant to offer a support system for junior women in computing. It is a great way to find inspiration, network with other women in CS, and find your niche in WIC’s community.";
    const mentorNum = "1";
    const bpcTitle = "BPC";
    const bpcDescrip = "Beginner's Programming Competition is an algorithmic problem solving competition open only to students who have yet to take upper division classes. Held every quarter, BPC is a fun way to prep for your next hackathon.";
    const bpcNum = "2";
    const edgeTitle = <a href='https://tinyurl.com/edgement2021' target="_blank"> EDGE </a> ;
    const edgeDescrip = "WIC partners with Society of Women Engineers to offer EDGE, a program for high school students. Participants are paired with an undergraduate mentor and attend various engineering workshops!" ;
    const edgeNum = "3";
    const socialTitle = "EVENTS";
    const socialDescrip = "WIC hosts a variety of events. From tech talks that offer an opportunity to network with companies, to fun interactive socials, to workshops helping refine technical skills, there's something for everyone!";
    const socialNum = "4";
    return (
      <div className="mid-background-section" id="involvement-page">
        <Container className="getInvolved">
          <Row>
            <Col
              id="GetInvolvedMargin"
              className="mid-background-section"
              md={12}
            >
              <h1 className="mid-background-section" id="get-involved-title">Get Involved</h1>
            </Col>
            <Col
              id="GetInvolvedMentorBPC"
              className="mid-background-section"
              md={6}
            >
              <GetInvolvedText
                title={mentorTitle}
                description={mentorDescrip}
                number={mentorNum}
              />
            </Col>
            <Col
              id="GetInvolvedMentorBPC"
              className="mid-background-section"
              md={6}
            >
              <GetInvolvedText
                title={bpcTitle}
                description={bpcDescrip}
                number={bpcNum}
              />
            </Col>
            <Col
              id="GetInvolvedEdgeSocials"
              className="mid-background-section"
              md={6}
            >
              <GetInvolvedText
                title={edgeTitle}
                description= {edgeDescrip}
                number={edgeNum}
              />
            </Col>
            <Col
              id="GetInvolvedEdgeSocials"
              className="mid-background-section"
              md={6}
            >
              <GetInvolvedText
                title={socialTitle}
                description={socialDescrip}
                number={socialNum}
              />
            </Col>
            <Col
              id="GetInvolvedBottom"
              className="mid-background-section"
              md={12}
            ></Col>
          </Row>
          
        </Container>


        <div className = "mid-background-section">
        <p id = "BPCMargin">For 4+ years, Women in Computing has been hosting quarterly programming competitions, Beginner's Programming Competition, 
            for 200+ undergraduate students who have not taken upper-division Computer Science or Data Science courses. 
            The students solve 10 questions similar to those used in programming interviews in 3 hours. 
            The competition format is similar to ACM ICPC, where participants brainstorm and pair-program to have fun and win prizes.</p>
        
          <div className="bpc-section">
          <Container>
          <Tabs>
            <TabList>
              <Tab>
                <h6>Previous BPC</h6>
              </Tab>
              <Tab>
                <h6>Upcoming BPC</h6>
              </Tab>
              <Tab>
                <h6>Sponsors</h6>
              </Tab>
            </TabList>

            <TabPanel>
              <p>
                <b>Spring 2022:</b>
              </p>
              <Col xs={10} md={4}>
                  <LazyLoadImage src={sp22} alt={"Spring 2022"}/>
              </Col>


            </TabPanel>
            <TabPanel>

            </TabPanel>
            <TabPanel>
              <Row>
                <Col id="logoMargin" xs={6} md={3}>
                  <div>
                    <LazyLoadImage src={servicenow} alt="service now"/>
                  </div>
                </Col>
              </Row>
            </TabPanel>
          </Tabs>

          </Container>
          </div>
        
        </div>
      </div>

      
    );
  }
}

export default GetInvolved;
