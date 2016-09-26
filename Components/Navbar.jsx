
import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";
  
class Navigation extends Component {

	render() {
		//prop const here

		return (
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
		);
	}
}

export default Navigation;

/*



*/






