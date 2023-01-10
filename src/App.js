import React from "react";
import { setConfiguration, Row, Col, Container } from "react-grid-system";
import Counter from 'react-number-counter'
import "./styles/App.scss";
import JoinUs from "./pages/JoinUs";
import AboutUs from "./pages/AboutUs";
import MemberCount from "./components/MemberCount.js";
import MeetTheTeam from "./pages/MeetTheTeam";
import GetInvolved from "./components/getInvolved.js";
import ContactUs from "./components/contactUs.js";
import Home from "./pages/home.js";
import Events from './pages/Events.js';
import Button from "./components/Button";
import Sponsors from "./pages/sponsors";
import Navbar from "./components/Navbar";
import Resources from "./components/Resources";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-179181760-1');
ReactGA.pageview(window.location.pathname + window.location.search);

setConfiguration({ gutterWidth: 60 });

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <AboutUs/>
      {/* <MemberCount/> */}
      <Events/>
      <MeetTheTeam/>
      <GetInvolved/>
      <Sponsors/>
      <Resources/>
      <JoinUs/>
      <ContactUs/>      
    </div>
  );
}

export default App;
