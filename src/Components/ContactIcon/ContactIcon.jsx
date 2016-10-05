import React, { Component } from "react";
import { Grid, Row, Col, Thumbnail } from "react-bootstrap";
import "./ContactIcon.css";

class ContactIcon extends Component {

	render(){

		return(
			<div>
				<Col sm={4}>

					<Thumbnail 
					href={this.props.url} 
					alt={this.props.text} 
					src={this.props.img} 
					target="_blank"
					className="ContactIcon-thumb"
					/>

				</Col> 
			</div>
		)
	}
}

export default ContactIcon;

/*

*/