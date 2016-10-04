import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Image, Overlay } from "react-bootstrap";
import AppPopover from "./AppPopover.jsx"


class PortfolioApp extends Component {

	constructor(props){
		super(props);
		this.state = {
			show: false
		};
		this.mouseIn = this.mouseIn.bind(this);
		this.mouseOut = this.mouseOut.bind(this);
	}

	mouseIn(e){
		this.state.show = true;
		console.log("enter state: ", this.state.show);

	}

	mouseOut(e){
		this.state.show = false;
		console.log("leave state: ", this.state.show);

	}

	render() {

		const { url, img, title, text } = this.props;
		let { show } = this.state;

		console.log("show: ", this.state.show);

		return (
			<div 
			style={styles.div}
			onMouseEnter={this.mouseIn}
			onMouseLeave={this.mouseOut}
			>
				<a href={url} target="_blank">
					<Image 
						src={img} 
						style={styles.img} 
						responsive
					/>
				</a>

				<Overlay
					show={show}
					animation="true"
					container={this}
					target={() => ReactDOM.findDOMNode(this.refs.target)}
				>

					<AppPopover title={title} text={text} />

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

