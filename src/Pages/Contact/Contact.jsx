import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Titlebar from "../../Components/Titlebar/Titlebar.jsx";
import ContactIcon from "../../Components/ContactIcon/ContactIcon.jsx";
import Paragraph from "../../Components//Paragraph/Paragraph.jsx";
import "./Contact.css";



class Contact extends Component {

	

	render() {
		const contacts = [
			{
				img: "/assets/images/linkedin.png",
				url: "https://www.linkedin.com/in/nathaniel-lapier-6637244a",
				text: "LinkedIn"
			},
			{
				img: "/assets/images/github.png",
				url: "https://github.com/nlapier",
				text: "Github"
			},
			{
				img: "/assets/images/email.png",
				url: "#",
				text: "Email"
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
										/>
									)}
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

