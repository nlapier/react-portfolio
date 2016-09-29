import React, { Component } from 'react';
import Bootstrap from "react-bootstrap";
import Titlebar from "./Titlebar";
import PortfolioApp from "./PortfolioApp";
import Radium from "radium";

class Portfolio extends Component {

	render() {
		const {apps} = this.props;

		return (

			<div>

				<Titlebar title="My Portfolio" />

				{apps.map((app) => 
					<PortfolioApp
						img={app.img}
						text={app.text}
						url={app.url}
					/>
				)}
				
			</div>
		);
	}
}

export default Portfolio;

/*



*/

