import React, { Component, cloneElement } from 'react';
import Bootstrap from "react-bootstrap";
import Radium from "radium";
import Navbar from "./Navbar";
 
/*
//Component for each individual app
import PortfolioApp from './Components/PortfolioApp';
*/


class Application extends Component {

	/*
	//I only need constructor if this app will have state.  
	constructor(...args) {
		super(...args);

		// this.toggleCompleted = this.toggleCompleted.bind(this);

		// this.addItem = this.addItem.bind(this);

		// this.state = {
		// 	items: [{
		// 		id: 3,
		// 		text: 'Laundry',
		// 		isCompleted: true
		// 	}]
		// };	
	}
	*/

	render() {

		return (

			<div>

				<Navbar bsStyle="inverse"/>

				<div className="Application row" style={styles.main}>

				{
					cloneElement(this.props.children)
				}

				</div>

			</div>
		)
	}
}

export default Radium(Application);

//Stylin'
const styles ={
	main: {
		"max-width": "1000px",
		"align-items": "center",
		"margin": "0 auto"
	}
}




