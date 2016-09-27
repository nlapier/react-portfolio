import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import Radium from "radium";

  
class Navigation extends Component {

	render() {

		return (
			<div style={styles.main}>

				<div style={styles.textDiv}>

					<div style={styles.nameDiv}>
						<span style={styles.name}>Nathaniel LaPier</span>
					</div>

					<div style={styles.navigationDiv}>
						<span>test</span>
					</div>

				</div>

			</div>

		);
	}
}

export default Radium(Navigation);

const styles ={
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

	textDiv:{
		"display": "flex",
		"justify-content": "space-between",
		"width": "900px",
	    "max-width": "900px",
	    "display": "inline-block"
	},

	nameDiv:{
		"display": "inline-block"
	},

	name: {
		"font-size": "20pt",
	    // "text-align": "center",
	    "line-height": "80px"
	},

	navigationDiv:{
		"display": "inline-block",
		"align-items": "right"
	},

	navigation: {
		// "display": "inline-block"
	}
}


/*

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






