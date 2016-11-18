import React, { Component } from 'react';
import Bootstrap from "react-bootstrap";
import {Grid, Row, Col} from "react-bootstrap";
import Titlebar from "../../Components/Titlebar/Titlebar.jsx";
import PortfolioApp from "../../Components/PortfolioApp/PortfolioApp.jsx";
import "./Portfolio.css";

class Portfolio extends Component {

	render() {

		const text = "Here are some of the projects I'm working on...";

		const apps = [
			{
				title: "Fresh Hangman",
				text: "A 90s-tastic jQuery-powered experience.",
				img: "/assets/images/prince.png",
				url: "https://nlp-fresh-hangman.herokuapp.com/",
				github: "https://github.com/nlapier/Hangman"
			},
			{
				title: "GIF-Explosion",
				text: "A first-time attempt at retrieving data from a web API.",
				img: "/assets/images/gif.png",
				url: "https://nlp-gif-explosion.herokuapp.com/",
				github: "https://github.com/nlapier/GIF-explosion"
			},
			{
				title: "Bet the Future",
				text: "A full-stack, Handlebars.js-based social media platform for tracking micro-wagers between friends.",
				img: "/assets/images/bet.png",
				url: "https://betthefuture.herokuapp.com/",
				github: "https://github.com/eHatz/Bet-The-Future"
			},
			{
				title: "Bootcampspot 2.0",
				img: "/assets/images/bootcamspot2.png",
				url:"http://bootcampspot2.herokuapp.com/",
				github: "https://github.com/eHatz",
				text: "A complete rewrite of Rutgers Coding Bootcamp's student portal using React, Node, Express and MySQL."
			}
		];

		return (

			<div>

				<Titlebar title="My Portfolio" />
				<br />

				<Row>

					<p className="text-center" >{ text } </p>

				</Row>

				{apps.map((app, index) => 
					<PortfolioApp
						text={app.text}					
						img={app.img}
						url={app.url}
						github={app.github}
						key={"Portfolio-", index}
					/>
				)}
				
			</div>
		);
	}
}

export default Portfolio;

/*



*/

