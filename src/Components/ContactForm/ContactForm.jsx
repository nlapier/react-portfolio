import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from "react-bootstrap";
import $ from "jquery";
import "./ContactForm.css";
 
class ContactForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			emailValue: "",
			messageValue:"",
			boxIsChecked: true
		};

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
		this.messageSubmit = this.messageSubmit.bind(this);
	}

	// getValidationState() {
		
	// }

	handleEmailChange(e) {
		this.setState({ emailValue: e.target.value });
	}

	handleMessageChange(e) {
		this.setState({ messageValue: e.target.value });
	}

	handleCheckboxChange(e) {
		this.setState({boxIsChecked: !this.state.boxIsChecked})
	}

	messageSubmit(){
		$.ajax({
	        url: "/email",
	        type: "POST",
	        data:{
	        	email: this.state.emailValue,
	        	message: this.state.messageValue
	        }
	    }).done(function(response){
	        console.log("response: " + response);
	    })
	}

	render() {
		return (
			<form>
				<FormGroup controlId="formBasicText">

					<ControlLabel>Your Message</ControlLabel>
      				<FormControl 
      					componentClass="textarea" 
      					value={this.state.messageValue}
      					placeholder="Message" 
      					onChange={this.handleMessageChange}
      				/>

      				<ControlLabel>Where should I contact you?</ControlLabel>
					<FormControl
						type="text"
						value={this.state.emailValue}
						placeholder=""
						onChange={this.handleEmailChange}
					/>

      				<Checkbox checked onChange={this.handleCheckboxChange}>Email a copy to your inbox</Checkbox>

				    <Button type="submit" onClick={this.messageSubmit}>
				      Submit
				    </Button>

				</FormGroup>
			</form>
		);
	}
}

export default ContactForm;




/*
			    $.ajax({
			        url: queryURL,
			        type: 'POST',
			        data: slackBody
			    }).done(function(response){

			        console.log("response: " + response);
         
			    })


			    $.ajax({
    url: '/contactus',
    dataType: 'json',
    cache: false,
    success: function(data) {
        // Success..
    }.bind(this),
    error: function(xhr, status, err) {
        console.error(status, err.toString());
    }.bind(this)
});
*/



