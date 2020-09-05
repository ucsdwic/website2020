import React from 'react';
import { Row, Col, Container } from "react-grid-system";
import "../styles/App.scss";
import wic_purple from "../static/wic_logo_purple.png"
import wic_white from "../static/wic_logo_white.png"
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		  scrolled: false
		};
		this.setNavBarColor = this.setNavBarColor.bind(this);
	  }

	scrollToTop = () => {
		scroll.scrollToTop();
	  };

	  componentDidMount() {
		window.addEventListener('scroll', this.setNavBarColor);
	  }
	  componentWillUnmount() {
		window.removeEventListener('scroll', this.setNavBarColor);
	  }

	  setNavBarColor(){
		const classOnScroll = window.scrollY > 200
		console.log(window.scrollY);
		
		this.setState({
			scrolled: classOnScroll
		  });

	  }

	render () {
		return (
			<div className={this.state.scrolled ? "opaque-navbar" : "transparent-navbar"} style={{ transition: '1s ease' }} id="navbar-sticky" onScroll={this.setNavBarColor}>
				<div id="navbar-container" >
						<div id="img-container">
							<img class="navbar-wic-logo" src={wic_white} onClick={this.scrollToTop}></img>
						</div>
						<h6>
							<Link activeClass="active" to="about-us-page" spy={true} smooth={true} offset={-70} duration={1000}>About</Link>
						</h6>
						<h6>
							<Link activeClass="active" to="events" spy={true} smooth={true} offset={-70} duration={1000}>Events</Link>
						</h6>
						<h6>
							<Link activeClass="active" to="meet-the-team-page" spy={true} smooth={true} offset={-70} duration={1000}>Team</Link>
						</h6>
						<h6>
							<Link activeClass="active" to="involvement" spy={true} smooth={true} offset={-70} duration={1000}>Involvement</Link>
						</h6>
						<h6>
							<Link activeClass="active" to="sponsors" spy={true} smooth={true} offset={-70} duration={1000}>Sponsors</Link>
						</h6>
						<h6>
							<Link activeClass="active" to="resources" spy={true} smooth={true} offset={-70} duration={1000}>Resources</Link>
						</h6>
						<h6>
							<Link activeClass="active" to="join-us-page" spy={true} smooth={true} offset={-70} duration={1000}>Join Us</Link>
						</h6>
						<h6>
							<Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={1000}>Contact</Link>
						</h6>
						
				</div>
			</div>
		)
	}
}

export default Navbar