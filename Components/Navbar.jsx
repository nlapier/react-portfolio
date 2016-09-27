import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import Radium from "radium";

  
class Navigation extends Component {

	render() {

		return (
			<div>
				<h1 style={styles.name}>Nathaniel LaPier</h1>

			</div>

		);
	}
}

export default Radium(Navigation);

const styles ={
	div:{
		"max-width": "1000px"
	},

	name: {
		"background-color": "#FFFFFF",
		"border-bottom": "1px #CCCCCC solid",
		"margin-bottom": "15px",
		"width": "100%",
		"height": "80px",
		"position": "fixed",
	    "top": "0",
	    "left": "0",
	    "right": "0",
	    "z-index": "1000",
	    // "text-align": "center",
	    "line-height": "80px"
	}
}


/*

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






