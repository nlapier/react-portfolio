import React, { Component } from 'react';
import Bootstrap from "react-bootstrap";
import {Grid, Row, Col} from "react-bootstrap";
import Titlebar from "../../Components/Titlebar/Titlebar.jsx";
import PortfolioApp from "../../Components/PortfolioApp/PortfolioApp.jsx";
import Paragraph from "../../Components/Paragraph/Paragraph.jsx";
import "./Portfolio.css";

class Portfolio extends Component {

	render() {

		const text = "Here are some of the projects I'm working on...";

		return (

			<div>

				<Titlebar title="My Portfolio" />

				<Row>

					<Paragraph text={ text } className="Portfolio-p" />

				</Row>

				{apps.map((app) => 
					<PortfolioApp
						title={app.title}
						text={app.text}					
						img={app.img}
						url={app.url}
						github={app.github}
					/>
				)}
				
			</div>
		);
	}
}

// function App (title, text, img, url){
// 	this.title = title,
// 	this.text = text,
// 	this.img = img,
// 	this.url = url
// }



const apps = [
	{
		title: "Fresh Hangman",
		text: "A 90s-tastic jQuery-powered experience.",
		img: "/assets/images/prince.png",
		url: "https://nlp-fresh-hangman.herokuapp.com/",
		github: "test"
	},
	{
		title: "GIF-Explosion",
		text: "A first-time attempt at retrieving data from a web API.",
		img: "/assets/images/gif.png",
		url: "https://nlp-gif-explosion.herokuapp.com/",
		github: "test"
	}
];

export default Portfolio;

/*



*/

