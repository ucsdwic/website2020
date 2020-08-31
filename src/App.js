import React from "react";
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import "./styles/App.scss";
import JoinUs from "./components/JoinUs";
import AboutUs from "./components/AboutUs"
import MeetTheTeam from "./pages/MeetTheTeam";
import GetInvolved from "./components/getInvolved.js";
import ContactUs from "./components/contactUs.js";
import Home from "./components/home.js";
import Button from "./components/Button";
import Sponsors from "./pages/sponsors";

setConfiguration({ gutterWidth: 80 });

function App() {
  return (
    <div>
      <AboutUs/>
      <MeetTheTeam/>
      <GetInvolved />
      <Sponsors/>
      <JoinUs/>
      <ContactUs/>
      <Button type="secondary" text = "Learn More" toLink = "https://google.com"/>
      <Button type="primary" text = "Sponsor Us" toLink = "https://google.com" />
    </div>
  );
}

export default App;
