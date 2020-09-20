import React from "react";
import { Row, Col, Container } from "react-grid-system";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../styles/App.scss";

class Resources extends React.Component {
  render() {
    return (
      <div
        className="darkest-background-section resources-section"
        id="resources-page"
      >
        <Container>
          <h1>Resources</h1>
          <Tabs>
            <TabList>
              {/* <Tab>
                <h6>Newsletter</h6>
              </Tab> */}
              <Tab>
                <h6>Scholarships</h6>
              </Tab>
              <Tab>
                <h6>Must Reads</h6>
              </Tab>
              {/* <Tab>
                <h6>Our Alumni</h6>
              </Tab> */}
              <Tab>
                <h6>Similar Orgs</h6>
              </Tab>
            </TabList>

            {/* <TabPanel>
              <h3>Newsletter Sign-Up & Previous Newsletters</h3>

              <ul>
                <li>
                  <p>
                    Sign up to receive our newsletter
                    <a
                      href="https://docs.google.com/forms/d/1PP55wKz-O1ei23OaoWR_RbEfRQvbWTngTHK5h36Viz0/edit?EMAIL&b_36c4fd991d266f23781ded980_aefe40901a"
                      target="_blank"
                    >
                      {" "}
                      here
                    </a>
                    !
                  </p>
                </li>
                <li>Fall 2020</li>
              </ul>
            </TabPanel> */}
            <TabPanel> 
              <h3>Scholarships, Conferences, and Hackathons</h3>
              <p>
                <b>
                  Scholarships: Our scholarship application period is currently
                  closed.
                </b>
              </p>
              <p>
                <b>Conferences:</b>
              </p>
              <ul>
                <li>
                  <p>
                    <a
                      href="https://tapiaconference.cmd-it.org/"
                      target="_blank"
                    >
                      ACM Richard Tapia Conference
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://ghc.anitab.org/" target="_blank">
                      Grace Hopper Celebration
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://we20.swe.org/" target="_blank">
                      Society of Women Engineers Conference
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://convention.nsbe.org/" target="_blank">
                      National Society of Black Engineers Convention
                    </a>
                  </p>
                </li>
              </ul>
              <p>
                <b>Hackathons:</b>
              </p>
              <ul>
                <li>
                  <p>
                    <a href="https://www.athenahacks.com/" target="_blank">
                      AthenaHacks
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://www.facebook.com/hackXXsd" target="_blank">
                      Hack XX
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://www.facebook.com/harvardwecode/"
                      target="_blank"
                    >
                      WECode: Women Engineers Code Conference
                    </a>
                  </p>
                </li>
              </ul>
            </TabPanel>
            <TabPanel>
              <h3>Articles, Books, and More</h3>
              <p>
                <b>Articles:</b>
              </p>
              <ul>
                <li>
                  <p>
                    <a
                      href="https://www.amazon.com/Black-Science-Technology-Engineering-Mathematics/dp/1658697677"
                      target="_blank"
                    >
                      101 Black Women in S.T.E.M.
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://medium.com/women-in-computing-ucsd/recap-women-in-computings-summer-dev-program-87b25a3a511f"
                      target="_blank"
                    >
                      Recap: Women In Computing’s Summer Dev Program
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://www.afrikanblackcoalition.org/news/the-adversity-in-diversity"
                      target="_blank"
                    >
                      The Adversity in “Diversity”
                    </a>
                  </p>
                </li>
              </ul>
              <p>
                <b>Books:</b>
              </p>
              <ul>
                <li>
                  <p>
                    <a
                      href="https://www.amazon.com/Ask-Women-Power-Negotiation-Really/dp/0553384554"
                      target="_blank"
                    >
                      Ask For It
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://www.amazon.com/Brotopia-Breaking-Boys-Silicon-Valley-ebook/dp/B074LQKJJC"
                      target="_blank"
                    >
                      Brotopia: Breaking Up the Boys' Club of Silicon Valley
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://www.amazon.com/Cracking-Coding-Interview-Gayle-McDowell/dp/0984782850/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=careercup-ctciwebsite-20&linkId=173f3d8878a1d7f0d131a85fbfc9f67f"
                      target="_blank"
                    >
                      Cracking the Coding Interview
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://www.amazon.com/Cracking-Data-Science-Interview-Questions/dp/171068013X"
                      target="_blank"
                    >
                      Cracking the Data Science Interview
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://www.amazon.com/Cracking-PM-Interview-Product-Technology/dp/0984782818"
                      target="_blank"
                    >
                      Cracking the PM Interview
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://www.amazon.com/Get-Paid-What-Youre-Worth/dp/031230269X"
                      target="_blank"
                    >
                      Get Paid What You're Worth
                    </a>
                  </p>
                </li>
              </ul>
              <p>
                <b>Videos:</b>
              </p>
              <ul>
                <li>
                  <p>
                    <a
                      href="https://drive.google.com/file/d/1dJOC_UI3vuF4JTg3G2or_Z56O2h4Wdae/view"
                      target="_blank"
                    >
                      WIC Welcome Video
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://www.youtube.com/watch?v=-GrQ3BF-nVw"
                      target="_blank"
                    >
                      Women In Computing - UCSD CSE
                    </a>
                  </p>
                </li>
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
              <p>
                <b>Diversity Engineering Organizations:</b>
              </p>
              <ul>
                <li>
                  <p>
                    <a href="http://nsbeucsd.weebly.com/" target="_blank">
                      {" "}
                      National Society of Black Engineers (NSBE)
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="http://ostem.ucsd.edu/" target="_blank">
                      Out in STEM (oSTEM)
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a
                      href="https://sites.google.com/view/shpeucsd/home"
                      target="_blank"
                    >
                      Society of Hispanic Professional Engineers (SHPE)
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://swe-ucsd.netlify.app/" target="_blank">
                      Society of Women Engineers (SWE)
                    </a>
                  </p>
                </li>
              </ul>
              <p>
                <b>
                  <a
                    href="https://jacobsschool.ucsd.edu/idea/student-orgs/undergraduate"
                    target="_blank"
                  >
                    {" "}
                    All Engineering Organizations
                  </a>
                </b>
              </p>
            </TabPanel>
          </Tabs>
        </Container>
      </div>
    );
  }
}

export default Resources;
