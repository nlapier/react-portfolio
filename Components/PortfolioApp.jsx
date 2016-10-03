import React, { Component } from 'react';
import { Image } from "react-bootstrap";
import Radium from "radium";

class PortfolioApp extends Component {

	render() {

		return (
			<div style={styles.div}>
				<a href={this.props.url} target="_blank">
					<Image src={this.props.img} style={styles.img} responsive/>
				</a>
			</div>
		);
	}
}

const styles ={
	div:{
		"width": "60%",
		"margin": "0 auto",
		"margin-top": "3%",
		"margin-bottom": "3%"

	},
	img: {
		// "border": "2px #CCCCCC solid",
		"padding": "1%",
		"margin": "auto",
		"width": "100%",
		"border": "2px #CCCCCC solid"
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

