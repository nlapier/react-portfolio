import React, { Component, cloneElement } from 'react';
 
/*
//Component for each individual app
import PortfolioApp from './Components/PortfolioApp';
*/


class Application extends Component {

	constructor(props, context) {
		super(props, context);

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

	render() {


		return (

			<div className="Application">

				{
					cloneElement(this.props.children
					  //{prop: var}
					  )
				}

			</div>
		)
	}
}

export default Application;