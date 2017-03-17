import React, { Component } from 'react';
import Bootstrap from "react-bootstrap";
import {Grid, Row, Col} from "react-bootstrap";
import Titlebar from "../../Components/Titlebar/Titlebar.jsx";
import PortfolioApp from "../../Components/PortfolioApp/PortfolioApp.jsx";
import {apps} from "../../text.js";
import "./Portfolio.css";

class Portfolio extends Component {

	render() {

		const text = "Here are some of the projects I'm working on...";

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

