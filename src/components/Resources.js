import React from "react";
import { Row, Col, Container } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../styles/App.scss";

class Resources extends React.Component {
  render() {
    return (
      <div className="darkest-background-section resources-section" id="resources-page">
        <Container>
          <h1>Resources</h1>
          <Tabs>
            <TabList>
              <Tab>
                <h6>Newsletter</h6>
              </Tab>
              <Tab>
                <h6>Scholarships</h6>
              </Tab>
              <Tab>
                <h6>Articles</h6>
              </Tab>
              {/* <Tab>
                <h6>Our Alumni</h6>
              </Tab> */}
              <Tab>
                <h6>Similar Orgs</h6>
              </Tab>
            </TabList>

            <TabPanel>
              <h3>Newsletter Sign-Up & Previous Newsletters</h3>
              <p>
                <ul>
                  <li>Sign up to receive our newsletter 
                    <a href="https://docs.google.com/forms/d/1PP55wKz-O1ei23OaoWR_RbEfRQvbWTngTHK5h36Viz0/edit?EMAIL&b_36c4fd991d266f23781ded980_aefe40901a" target="_blank"> here</a>
                  !
                  </li>
                  <li>Fall 2020</li>
                </ul>
              </p>
            </TabPanel>
            <TabPanel>
              <h3>Scholarships, Conferences, and Hackathons</h3>
              <p><b>Scholarships: Our scholarship application period is currently closed.</b></p>
              <p><b>Conferences:</b></p>
                <ul>
                <li>
                  <p>
                    <a href="https://tapiaconference.cmd-it.org/" target="_blank">ACM Richard Tapia Conference</a>
                  </p>
                  </li>
                  <li> 
                    <p>
                      <a href="https://ghc.anitab.org/" target="_blank">Grace Hopper Celebration</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="https://we20.swe.org/" target="_blank">Society of Women Engineers Conference</a>
                    </p>
                  </li>
                  <li>
                    <p>
                    <a href="https://convention.nsbe.org/" target="_blank">National Society of Black Engineers Convention</a>
                    </p>
                  </li>
                </ul>
                <p><b>Hackathons:</b></p>
                <ul>
                <li>
                  <p>
                    <a href="https://www.athenahacks.com/" target="_blank">AthenaHacks</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://www.facebook.com/hackXXsd" target="_blank">Hack XX</a>
                  </p>
                  </li>
                  <li> 
                    <p>
                      <a href="https://www.facebook.com/harvardwecode/" target="_blank">WECode: Women Engineers Code Conference</a>
                    </p>
                  </li>
                </ul>
            </TabPanel>
            <TabPanel>
              <h3>Must reads!</h3>
                <ul>
                  <li><p>Check out our Medium articles here!</p></li>
                  <li><p>https://www.womenintech.ucla.edu/resources</p></li>
                  <li><p>https://wicc.cornell.edu/resources.php</p></li>
                  <li><p>https://www.women.cs.cmu.edu/papers/</p></li>
                </ul>
            </TabPanel>
            {/* <TabPanel>
              <h3>Alumni and Where They are Now</h3>
              <p>
                Coming soon!
                Name + link to (info/resume/linkedin) + where they are now 
                Industry, research, graduate school
              </p>
            </TabPanel> */}
            <TabPanel>
              <h3>Engineering Organizations on Campus</h3>
              <p><b>Diversity Engineering Organizations:</b></p>
              <ul>
                <li>
                  <p>
                    <a href="http://nsbeucsd.weebly.com/" target="_blank"> National Society of Black Engineers (NSBE)</a> 
                  </p>
                </li>
                <li>
                  <p>
                    <a href="http://ostem.ucsd.edu/" target="_blank">Out in STEM (oSTEM)</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://sites.google.com/view/shpeucsd/home" target="_blank">Society of Hispanic Professional Engineers (SHPE)</a> 
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://swe-ucsd.netlify.app/" target="_blank">Society of Women Engineers (SWE)</a> 
                  </p>
                </li>
              </ul>
              <p><b>
                <a href="https://jacobsschool.ucsd.edu/idea/student-orgs/undergraduate" target="_blank"> All Engineering Organizations</a>
              </b></p>
            </TabPanel>
          </Tabs>
        </Container>
      </div>
    );
  }
}

export default Resources;
