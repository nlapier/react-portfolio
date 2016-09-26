import React, { Component, cloneElement } from 'react';
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

				<div className="Application row">

				{
					cloneElement(this.props.children
					  //{prop: var}
					  )
				}

				</div>


			</div>


		)
	}
}

export default Application;