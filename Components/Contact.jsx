import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Titlebar from "./Titlebar";
import ContactIcon from "./ContactIcon";
import Paragraph from "./Paragraph";



class Contact extends Component {

	render() {
		const contacts = [
			{
				img: "/assets/images/github.png",
				url: "https://github.com/nlapier",
				text: "Github"
			},
			{
				img: "/assets/images/linkedin.png",
				url: "https://www.linkedin.com/in/nathaniel-lapier-6637244a",
				text: "LinkedIn"
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

				<Grid>
					<Row>

						{contacts.map((contact) =>
							<ContactIcon
								img={contact.img}
								url={contact.url}
								text={contact.text}
							/>
						)}

					</Row>
				</Grid>

			</div>
		);
	}
}


export default Contact;

/*



*/

