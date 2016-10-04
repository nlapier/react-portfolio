import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

class ContactIcon extends Component {

	render(){
		<div>
			<Col cs ={12} sm={4}>

				<Thumbnail href={this.props.url} alt={this.props.text} src={this.props.img} />

			</Col> 
		</div>
	}
}

export default ContactIcon;