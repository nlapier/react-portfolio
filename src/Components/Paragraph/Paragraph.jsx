import React, { Component } from "react";
import Bootstrap from "react-bootstrap";

class About extends Component {

	render() {

		return (

			<p>
				{this.props.text}
			</p>

		);
	}
}

export default About;



/*

const styles = {
	p:{
		"font-size": "22pt",
		"text-justify": "distribute"
	}
}

*/

