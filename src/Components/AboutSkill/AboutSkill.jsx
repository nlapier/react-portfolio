import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import "./AboutSkill.css";


class AboutSkill extends Component {

	render() {

		return (
			<li className="AboutSkill-main">
				&lt;{this.props.text}&gt;
			</li>
		);
	}
}

export default AboutSkill;