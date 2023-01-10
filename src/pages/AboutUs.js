import React from "react";
import { Row, Col, Container } from "react-grid-system";
import "../styles/AboutUs.scss";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { GiGraduateCap } from "react-icons/gi";
import { AiFillTrophy } from "react-icons/ai";
import AboutUsSection from "../components/AboutUsSection";
 
class AboutUs extends React.Component {
 render() {
   return (
     <div className="mid-background-section" id="about-us-page">
       <Container>
         <Row className="about-us-no-icon">
           <Col>
             <h1>About Us</h1>
             <div className="au-video">
               <div className="au-video-wrapper">
                 <div className="au-video-background"></div>
                   <iframe className="about-us-video" src="https://drive.google.com/file/d/1dJOC_UI3vuF4JTg3G2or_Z56O2h4Wdae/preview"></iframe>
               </div>
             </div>
             <p id="about-us-blurb">
               We're coders and engineers - of all genders - who support
               the female presence in computing. We run events, from tech talks
               to socials, and provide opportunities for female engineers to
               connect and succeed. Check out the above video from our 2020-2021 president!
             </p>
           </Col>
         </Row>
         {/* <Row className = "about-us-icons">
           <Col xs={12} sm={6} md={3}>
             <AboutUsSection icon={RiComputerFill} title="Industry Events" />
           </Col>
           <Col sm={6} md={3}>
             <AboutUsSection icon={GiGraduateCap} title="Grad School Prep" />
           </Col>
           <Col sm={6} md={3}>
             <AboutUsSection icon={FaMoneyCheckAlt} title="Scholarships" />
           </Col>
           <Col sm={6} md={3}>
             <AboutUsSection icon={AiFillTrophy} title="Coding Competitions" />
           </Col>
         </Row> */}
       </Container>
     </div>
   );
 }
}
export default AboutUs;
 

