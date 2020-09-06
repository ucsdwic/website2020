import React from 'react';
import { Row, Col, Container } from "react-grid-system";
import "../styles/Navbar.scss";
import wic_purple from "../static/wic_logo_purple.png"
import wic_white from "../static/wic_logo_white.png"
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			scrolled: false,
			navbarBackground: "navbar-transparent",
			navbarHeading: "navbar-purple-heading",
			wicLogo: wic_purple
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
		var scrolled = window.scrollY > 200
		this.setState({
			navbarBackground: scrolled ? "navbar-opaque" : "navbar-transparent",
			// navbarHeading: scrolled ? "navbar-white-heading": "navbar-purple-heading",
			// wicLogo: scrolled ? wic_white : wic_purple
		});
	}

	// TODO: Dynamically render the Links Section
	render () {
		return (
			<div className={this.state.navbarBackground} style={{ transition: '1s ease' }} id="navbar-sticky" onScroll={this.setNavBarColor}>
				<div id="navbar-container">
						<div id="img-container">
							<img class="navbar-wic-logo" src={this.state.wicLogo} onClick={this.scrollToTop}></img>
						</div>
						<h6 className={this.state.navbarHeading} style={{ transition: '1s ease' }}>
							<Link activeClass="navbar-active" to="about-us-page" spy={true} smooth={true} offset={-70} duration={1000}>&nbsp;About&nbsp;</Link>
						</h6>
						<h6 className={this.state.navbarHeading} style={{ transition: '1s ease' }}>
							<Link activeClass="navbar-active" to="events-page" spy={true} smooth={true} offset={-70} duration={1000}>&nbsp;Events&nbsp;</Link>
						</h6>
						<h6 className={this.state.navbarHeading} style={{ transition: '1s ease' }}>
							<Link activeClass="navbar-active" to="meet-the-team-page" spy={true} smooth={true} offset={-70} duration={1000}>&nbsp;Team&nbsp;</Link>
						</h6>
						<h6 className={this.state.navbarHeading} style={{ transition: '1s ease' }}>
							<Link activeClass="navbar-active" to="involvement-page" spy={true} smooth={true} offset={-70} duration={1000}>&nbsp;Involvement&nbsp;</Link>
						</h6>
						<h6 className={this.state.navbarHeading} style={{ transition: '1s ease' }}>
							<Link activeClass="navbar-active" to="sponsors-page" spy={true} smooth={true} offset={-70} duration={1000}>&nbsp;Sponsors&nbsp;</Link>
						</h6>
						<h6 className={this.state.navbarHeading} style={{ transition: '1s ease' }}>
							<Link activeClass="navbar-active" to="resources-page" spy={true} smooth={true} offset={-70} duration={1000}>&nbsp;Resources&nbsp;</Link>
						</h6>
						<h6 className={this.state.navbarHeading} style={{ transition: '1s ease' }}>
							<Link activeClass="navbar-active" to="join-us-page" spy={true} smooth={true} offset={-70} duration={1000}>&nbsp;Join Us&nbsp;</Link>
						</h6>
						<h6 className={this.state.navbarHeading} style={{ transition: '1s ease' }}>
							<Link activeClass="navbar-active" to="contact-us-page" spy={true} smooth={true} offset={-70} duration={1000}>Contact</Link>
						</h6>
				</div>
			</div>
		)
	}
}

export default Navbar