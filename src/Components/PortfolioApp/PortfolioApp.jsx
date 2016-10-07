import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Image, Overlay } from "react-bootstrap";
import AppPopover from "../AppPopover/AppPopover.jsx";
import "./PortfolioApp.css";


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
		this.setState({show: true})
		console.log("enter state: ", this.state.show);

	}

	mouseOut(e){
		this.setState({show: false})
		console.log("leave state: ", this.state.show);
	}

	render() {

		const { url, img, title, text } = this.props;
		let { show } = this.state;

		console.log("show: ", this.state.show);

		return (
			<div 
			className="PortfolioApp-main"
			onMouseEnter={this.mouseIn}
			onMouseLeave={this.mouseOut}
			>
				<a href={url} target="_blank">
					<Image 
						className="PortfolioApp-img"
						src={img} 
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


export default PortfolioApp;



/*

					


	{
		title: "GIF-Explosion",
		text: "A 90s-tastic jQuery-powered experience.",
		img: "/assets/images/prince.png",
		url: "https://nlp-gif-explosion.herokuapp.com/"
	},


*/

