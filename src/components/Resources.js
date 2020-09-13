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
              <h3>Scholarships and Conferences</h3>
              <p>
              **Scholarship application period is currently closed.
                <ul>
                  <li>Grace Hopper Conference</li>
                  <li>Tapia Conference</li>
                </ul>
              </p>
            </TabPanel>
            <TabPanel>
              <h3>Must reads!</h3>
              <p>
                <ul>
                  <li>** resources we really like</li>
                  <li>** update once a quarter</li>
                  <li>Medium articles</li>
                  <li>https://www.womenintech.ucla.edu/resources</li>
                  <li>https://wicc.cornell.edu/resources.php</li>
                  <li>https://www.women.cs.cmu.edu/papers/</li>
                </ul>
              </p>
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
              <p>

                <ul>
                  <li> -<a href="https://jacobsschool.ucsd.edu/idea/student-orgs/undergraduate" target="_blank"> All Engineering Organizations</a> </li>
                  <li> 
                    Diversity Engineering Organizations: 
                    <li>
                      <a href="http://nsbeucsd.weebly.com/" target="_blank"> National Society of Black Engineers (NSBE)</a> 
                    </li>
                    <li>
                      <a href="http://ostem.ucsd.edu/" target="_blank">Out in STEM (oSTEM)</a>
                    </li>
                    <li>
                      <a href="https://sites.google.com/view/shpeucsd/home" target="_blank">Society of Hispanic Professional Engineers (SHPE)</a> 
                    </li>
                    <li>
                      <a href="https://swe-ucsd.netlify.app/" target="_blank">Society of Women Engineers (SWE)</a> 
                    </li>
                  </li>
                </ul>
                
                
              </p>
            </TabPanel>
          </Tabs>
        </Container>
      </div>
    );
  }
}

export default Resources;
