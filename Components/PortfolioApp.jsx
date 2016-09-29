import React, { Component } from 'react';
import { Image } from "react-bootstrap";
import Radium from "radium";

class PortfolioApp extends Component {

	render() {
		//Need: 
			//{this.props.url}
			//{this.props.text}
		return (
			<div>

			<Image src={this.props.img} responsive />
				
			</div>
		);
	}
}

export default Radium(PortfolioApp);

/*



*/

