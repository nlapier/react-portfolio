import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Image } from "react-bootstrap";
import AppPopover from "../AppPopover/AppPopover.jsx";
import "./PortfolioApp.css";


class PortfolioApp extends Component {

	render() {

		const { url, img, title, text } = this.props;
		// let { show } = this.state;

		// console.log("show: ", this.state.show);

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

				<div id="PortfolioApp-text">
					<span><h3>{ title }</h3></span>
					<span><p>{ text }</p></span>
				</div>

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

