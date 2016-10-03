import React, { Component } from 'react';
import { Image } from "react-bootstrap";
import Radium from "radium";

class PortfolioApp extends Component {

	render() {

		return (
			<a href={this.props.url} target="_blank">
				<div>
					<Image src={this.props.img} responsive />
				</div>
			</a>
		);
	}
}

export default Radium(PortfolioApp);



/*
	{
		title: "GIF-Explosion",
		text: "A 90s-tastic jQuery-powered experience.",
		img: "/assets/images/prince.png",
		url: "https://nlp-gif-explosion.herokuapp.com/"
	},


*/

