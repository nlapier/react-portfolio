import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./Navigationbar.css";

  
class Navigationbar extends Component {

	render() {

		return (
			<Navbar className="Navigationbar-main">
				<Navbar.Header>
						<a href="#" className="Navigationbar-name">Nathaniel LaPier</a>
					<Navbar.Toggle />
				</Navbar.Header>
				
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey={1} href="#/" className="Navigationbar-links">About Me</NavItem>
						<NavItem eventKey={2} href="#/Portfolio" className="Navigationbar-links">Portfolio</NavItem>
						<NavItem eventKey={3} href="#/Contact" className="Navigationbar-links">Contact</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Navigationbar;


/*

main:{
		// "max-width": "1000px",
		"background-color": "#FFFFFF",
		"border-bottom": "1px #CCCCCC solid",
		"margin-bottom": "15px",
		"width": "100%",
		"height": "80px",
		"position": "fixed",
	    "top": "0",
	    "left": "0",
	    "display": "flex",
	    "justify-content": "center"
	    },

					<ul className="list-inline text-center">
						<li style={styles.navigation}>About Me</li>
						<li style={styles.navigation}>Portfolio</li>
						<li style={styles.navigation}>Contact Me</li>	
					</ul>






				<span style={styles.name}>-Full stack JavaScript-based web development-</span>
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">React-Bootstrap</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavItem eventKey={1} href="#/">About Me</NavItem>
					<NavItem eventKey={2} href="#/Portfolio">Portfolio</NavItem>
					<NavItem eventKey={3} href="#/Contact">Contact Me</NavItem>
				</Nav>
			</Navbar>


*/






