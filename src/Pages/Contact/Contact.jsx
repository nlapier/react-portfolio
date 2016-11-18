import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
// import smoothScroll from "smoothscroll";
import Titlebar from "../../Components/Titlebar/Titlebar.jsx";
import ContactIcon from "../../Components/ContactIcon/ContactIcon.jsx";
import ContactForm from "../../Components/ContactForm/ContactForm.jsx"
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
		const contacts = [
			{
				img: "/assets/images/linkedin.png",
				url: "https://www.linkedin.com/in/nathaniel-lapier-6637244a",
				text: "LinkedIn",
				target:"_blank",
				onClick: null
			},
			{
				img: "/assets/images/github.png",
				url: "https://github.com/nlapier",
				text: "Github",
				target:"_blank",
				onClick: null
			},
			{
				img: "/assets/images/email.png",
				url: "#",
				text: "Email",
				target: "#",
				onClick: this.handleClick
			}
		]

		return (
			<div>

				<Titlebar title="Contact Me" />

				<br />

					<Row>
						<Col sm={2}></Col>
							<Col sm={8}>
								<Row>
									{contacts.map((contact) =>
										<ContactIcon
											img={contact.img}
											url={contact.url}
											text={contact.text}
											target={contact.target}
											onClick={contact.onClick}
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

