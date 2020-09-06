import React from "react";
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import "./styles/App.scss";
import JoinUs from "./pages/JoinUs";
import AboutUs from "./pages/AboutUs";
import MeetTheTeam from "./pages/MeetTheTeam";
import GetInvolved from "./components/getInvolved.js";
import ContactUs from "./components/contactUs.js";
import Home from "./pages/home.js";
import Events from './pages/Events.js';
import Button from "./components/Button";
import Sponsors from "./pages/sponsors";
import Navbar from "./components/Navbar";

setConfiguration({ gutterWidth: 80 });

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <MeetTheTeam />
      <Events/>
      <GetInvolved />
      <Sponsors />
      <JoinUs />
      <ContactUs />
    </div>
  );
}

export default App;
