import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import Radium from "radium";

  
class Navigation extends Component {

	render() {

		return (
			<Navbar style={styles.nav}>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#" style={styles.name}>Nathaniel LaPier</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey={1} href="#/">About Me</NavItem>
						<NavItem eventKey={2} href="#/Portfolio">Portfolio</NavItem>
						<NavItem eventKey={3} href="#/Contact">Contact</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Radium(Navigation);

const styles ={
	nav:{
		"background-color": "#FFFFFF",
		"border": "none",
		"border-bottom": "1px #CCCCCC solid",
		"border-radius": "0px"
	},
	name:{
		"font-size": "28pt"
	}
}


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






