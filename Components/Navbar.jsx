import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import Radium from "radium";

  
class Navigation extends Component {

	render() {

		return (
			<h1>test</h1>

		);
	}
}

export default Radium(Navigation);

const styles ={
	main: {
		"border-top": "2px #CCCCCC solid",
		"border-bottom": "2px #CCCCCC solid"
	}
}


/*
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






