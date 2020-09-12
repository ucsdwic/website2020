import React from 'react';
import "../styles/Navbar.scss";
import wic_purple from "../static/wic_logo_purple.png"
import { Link, animateScroll as scroll } from "react-scroll";
import windowSize from 'react-window-size';
import {HamburgerCollapse} from 'react-animated-burgers';
import SlidingPanel from 'react-sliding-side-panel';


class Navbar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			scrolled: false,
			navbarBackground: "navbar-transparent",
			isActive: false,
			isPaneOpen: false,
			isPaneOpenLeft: false,
		};
		this.setNavBarColor = this.setNavBarColor.bind(this);
		this.toggleButton = this.toggleButton.bind(this);
	}


	scrollToTop() {
		scroll.scrollToTop();
	}
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
		});
	}

	toggleButton(){
		console.log('here')
		this.setState({
		  isActive: !this.state.isActive,
		  isPaneOpen: !this.state.isPaneOpen,
		})
	  }


	render () {
		const navbarItems = [{ id: "about-us-page", name: "About"},
							 { id: "events-page", name: "Events"},
							 { id: "meet-the-team-page",name: "Team"},
				     		 { id: "involvement-page", name: "Involvement"},
						     { id: "sponsors-page", name: "Sponsors"},
						     { id: "resources-page", name: "Resources"},
							 { id: "join-us-page", name: "Join Us"},
							 { id: "contact-us-page", name: "Contact Us"}]
		const navbarHorizontal = navbarItems.map(navbarItem => <h6 className="navbar-purple-heading" style={{ transition: '1s ease' }}>
															   		<Link activeClass="navbar-active" to={navbarItem.id} spy={true} smooth={true} offset={-70} duration={1000}>&nbsp;{navbarItem.name}&nbsp;</Link>
															   </h6>)
		const navbarVertical = navbarItems.map(navbarItem => <h2>
																<Link to={navbarItem.id} spy={true} smooth={true} offset={-70} duration={1000} onClick={this.toggleButton}>&nbsp;{navbarItem.name}&nbsp;</Link>
															</h2>)

		return (
			<div className={this.state.navbarBackground} style={{ transition: '1s ease' }} id="navbar-sticky" onScroll={this.setNavBarColor}>
				<div id="navbar-container">
						<div id="img-container">
							<img className="navbar-wic-logo" src={wic_purple} onClick={this.scrollToTop}></img>
						</div>
						{this.props.windowWidth > 790 ? (
							<>
								{navbarHorizontal}
							</>
						):(
							<>
								<SlidingPanel isOpen={this.state.isPaneOpen} type={'right'} size={this.props.windowWidth > 576 ? 45 : 80} hideHeader backdropClicked={this.toggleButton}>
									<div id="vertical-navbar-container">
										{navbarVertical}
									</div>
								</SlidingPanel>
								<HamburgerCollapse isActive={this.state.isActive} toggleButton={this.toggleButton} barColor="#4d4c7d" className="hamburger"></HamburgerCollapse>
							</>
						)}
				</div>
				
			</div>
		)
	}
}

export default windowSize(Navbar)