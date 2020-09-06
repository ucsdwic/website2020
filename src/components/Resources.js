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
                <h6>Conferences</h6>
              </Tab>
              <Tab>
                <h6>Our Alumni</h6>
              </Tab>
              <Tab>
                <h6>Similar Orgs</h6>
              </Tab>
            </TabList>

            <TabPanel>
              <h3>Any content 1</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel>
              <h3>Any content 2</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel>
              <h3>Any content 3</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel>
              <h3>Any content 4</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
            <TabPanel>
              <h3>Any content 5</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TabPanel>
          </Tabs>
          {/* <Row>
                    <Col sm={12} md={12}>
                        <h1 className="teamTitle">Resources</h1>
                    </Col>
                </Row>
                <Row>
                    <Col class="toggle-tab">
                        <button class="tablinks" onclick="openResource(event, 'Newsletters')">Newsletters</button>
                        <button class="tablinks" onclick="openResource(event, 'Scholarships')">Scholarships</button>
                        <button class="tablinks" onclick="openResource(event, 'Conferences')">Conferences</button>
                        <button class="tablinks" onclick="openResource(event, 'Our Alumni')">Our Alumni</button>
                        <button class="tablinks" onclick="openResource(event, 'Similar Orgs')">Similar Orgs</button>
                    </Col>
                </Row> */}
        </Container>
      </div>
    );
  }
}

export default Resources;
