import React, { Component, cloneElement } from 'react';
import Bootstrap from "react-bootstrap";
import Radium from "radium";
import Navbar from "./Navbar";
 
/*
//Component for each individual app
import PortfolioApp from './Components/PortfolioApp';
*/


class Application extends Component {


	render() {

		return (

			<div>

				<Navbar style={styles.nav}/>

				<div className="container-fluid">

					<div className="Application row" style={styles.main}>

						{
							cloneElement(this.props.children)
						}

					</div>
				</div>

			</div>
		)
	}
}

export default Radium(Application);

//




//Stylin'
const styles ={
	nav: {
		"z-index": "1000",
		"opacity": "99"
	},

	main: {
		"max-width": "900px",
		"align-items": "center",
		"margin": "0 auto",
		"position": "relative"
	}
}




