import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
// import smoothScroll from "smoothscroll";
import Titlebar from "../../Components/Titlebar/Titlebar.jsx";
import ContactIcon from "../../Components/ContactIcon/ContactIcon.jsx";
import ContactForm from "../../Components/ContactForm/ContactForm.jsx"
import {contacts} from "../../text.js";
import "./Contact.css";



class Contact extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showForm: false
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState({showForm: !this.state.showForm});
		// let formRow = document.querySelector("#Contact-formRow")
		// smoothScroll(formRow);
	}

	render() {

		return (
			<div>

				<Titlebar title="Contact Me" />

				<br />

					<Row>
						<Col sm={2}></Col>
							<Col sm={8}>
								<Row>
									{contacts.map((contact, index) =>
										<ContactIcon
											img={contact.img}
											url={contact.url}
											text={contact.text}
											target={contact.target}
											onClick={contact.text === "Email" ? this.handleClick : null}
											key={"Contact-", index}
										/>
									)}
								</Row>

								<br />

								<Row id="Contact-formRow">
									{this.state.showForm ? <ContactForm /> : null}
								</Row>
							</Col>
						<Col sm={2}></Col>
					</Row>

			</div>
		);
	}
}


export default Contact;

/*



*/

