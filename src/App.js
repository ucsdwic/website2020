import React from "react";
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import "./styles/App.scss";
import JoinUs from "./pages/JoinUs";
import AboutUs from "./pages/AboutUs";
import MeetTheTeam from "./pages/MeetTheTeam";
import GetInvolved from "./components/getInvolved.js";
import ContactUs from "./components/contactUs.js";
import Events from './pages/Events.js';
import Home from "./pages/home.js";
import Resources from "./components/Resources";
import Sponsors from "./pages/sponsors";

setConfiguration({ gutterWidth: 60 });

function App() {
  return (
    <div>
      <Home/>
      <AboutUs/>
      <Events/>
      <MeetTheTeam/>
      <GetInvolved />
      <Sponsors />
      <Resources />
      <JoinUs />
      <ContactUs />
    </div>
  );
}

export default App;
