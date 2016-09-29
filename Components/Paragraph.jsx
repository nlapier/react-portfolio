import React, { Component } from "react";
import Bootstrap from "react-bootstrap";
import Radium from "radium";

class About extends Component {

	render() {

		return (

			<p style={styles.p}>
				{this.props.text}
			</p>

		);
	}
}

export default Radium(About);

const styles = {
	p:{
		"font-size": "22pt",
		"text-justify": "distribute"
	}
}

/*



*/

