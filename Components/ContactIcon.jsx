import React, { Component } from "react";
import { Grid, Row, Col, Thumbnail } from "react-bootstrap";

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
					style={styles.thumb}
					/>

				</Col> 
			</div>
		)
	}
}

const styles ={
	thumb:{
		backgroundColor: "transparent",
		border: "0px",
		width: "60%",
		margin: "auto"
	}

}

export default ContactIcon;

/*

*/