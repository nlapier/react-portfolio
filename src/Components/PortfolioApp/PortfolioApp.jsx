import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Image } from "react-bootstrap";
import AppPopover from "../AppPopover/AppPopover.jsx";
import "./PortfolioApp.css";


class PortfolioApp extends Component {

	render() {

		const { url, img, title, text, github } = this.props;
		// let { show } = this.state;

		// console.log("show: ", this.state.show);

		return (
			<div 
				className="PortfolioApp-main"
			>
				<a href={url} target="_blank">
					<Image 
						className="PortfolioApp-img"
						src={img} 
						responsive
					/>
				</a>

				<div id="PortfolioApp-text" className="text-center">
					<p>{ title }</p>
					<h3>{ text }</h3>
					<h5>On Github:
						<a href={github}>{ github }</a>
					</h5>


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

