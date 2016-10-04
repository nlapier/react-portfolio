import React, { Component } from 'react';
import { Image, Overlay } from "react-bootstrap";
import AppPopover from "./AppPopover.jsx"


class PortfolioApp extends Component {

	constructor(...args){
		super(...args);
		this.state = {
			show: false
		};
	}

	onMouseEnter(e){
		this.state.show = true;
		console.log("state: ", state);

	}

	onMouseLeave(e){
		this.state.show = false;
		console.log("state: ", state);
	}

	render() {

		return (
			<div style={styles.div}>
				<a href={this.props.url} target="_blank">
					<Image 
						src={this.props.img} 
						style={styles.img} 
						responsive
					/>
				</a>

				<Overlay
					show={this.state.show}
					placement="center"
					animation="true"
					container={this}
				>

					<AppPopover title={this.props.title} text={this.props.text} />

				</Overlay>

			</div>
		);
	}
}


//Stylin'
const styles ={
	div:{
		width: "60%",
		margin: "0 auto",
		marginTop: "3%",
		marginBottom: "3%"

	},
	img: {
		// "border": "2px #CCCCCC solid",
		padding: "1%",
		margin: "auto",
		width: "100%",
		border: "2px #CCCCCC solid"
	}
}

export default PortfolioApp;



/*
	{
		title: "GIF-Explosion",
		text: "A 90s-tastic jQuery-powered experience.",
		img: "/assets/images/prince.png",
		url: "https://nlp-gif-explosion.herokuapp.com/"
	},


*/

