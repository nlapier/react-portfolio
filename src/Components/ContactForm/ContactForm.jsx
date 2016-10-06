import React, { Component } from "react";
import Bootstrap from "react-bootstrap";
import "./ContactForm.css";

class ContactForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			emailValue: "",
			messageValue:""
		};

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleMessageChange = this.handleMessageChange.bind(this);
	},

	getValidationState() {
		
	},

	handleEmailChange(e) {
		this.setState({ emailValue: e.target.value });
	},

	handleMessageChange(e) {
		this.setState({ messageValue: e.target.value });
	},

	render() {
		return (
			<form>
				<FormGroup
					controlId="formBasicText"
					validationState={this.getValidationState()}
				>

					<ControlLabel>Your Email</ControlLabel>
					<FormControl
						type="email"
						value={this.state.emailValue}
						placeholder="Email"
						onChange={this.handleEmailChange}
					/>

					<ControlLabel>Your Message</ControlLabel>
      				<FormControl 
      					componentClass="textarea" 
      					value={this.state.messageValue}
      					placeholder="Message" 
      					onChange={this.handleEmailChange}
      					/>

      				<Checkbox checked>Email a copy to your inbox</Checkbox>

				</FormGroup>
			</form>
		);
	}

}