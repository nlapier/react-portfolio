import React, { Component } from 'react';
import Bootstrap from "react-bootstrap";
import Titlebar from "../../Components/Titlebar/Titlebar.jsx";
import PortfolioApp from "../../Components/PortfolioApp/PortfolioApp.jsx";
import "./Portfolio.css";

class Portfolio extends Component {

	render() {

		return (

			<div>

				<Titlebar title="My Portfolio" />

				{apps.map((app) => 
					<PortfolioApp
						title={app.title}
						text={app.text}					
						img={app.img}
						url={app.url}
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
		url: "https://nlp-fresh-hangman.herokuapp.com/"
	},
	{
		title: "GIF-Explosion",
		text: "A first-time attempt at retrieving data from a web API.",
		img: "/assets/images/gif.png",
		url: "https://nlp-gif-explosion.herokuapp.com/"
	}
];

export default Portfolio;

/*



*/

