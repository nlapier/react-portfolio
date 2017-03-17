import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Titlebar from "../../Components/Titlebar/Titlebar.jsx";
import "./About.css";
import text from "../../text.js";

class About extends Component {

	render() {
		const welcomeText = text.welcomeText;

		const bioText = text.bioText;

		const moreText = text.moreText

		const inAddition = text.inAddition

		return (

			<div>
				<Titlebar title="About Me" />

				<Row>
					<Col xs={1}></Col>

					<Col xs={10}>

						{/*
												<Row className="show-grid About-welcome">
						
													<h1>{ welcomeText }</h1>
						
												</Row>
						
												<br/>
						*/}
						<Row className="show-grid">

							<img 
								src="/assets/images/Headshot2.jpg" 
								alt="Nathaniel LaPier" 
								className="img-square img-responsive About-headshot" 
							/>

							<p>{ bioText }</p>

						</Row>

						<br />

						<Row className="show-grid">

							<p>{ moreText }</p>

						</Row> 

						<br />
						<br />
						<br />
						<br />

						<Row className="text-center show-grid">
							<p id="About-skillsHead">
								{ inAddition }
							</p>

							<ul className="list-inline text-center">
								<li className="About-skills">&lt;jQuery&gt;</li>
								<li className="About-skills">&lt;Node.js&gt;</li>
								<li className="About-skills">&lt;Express.js&gt;</li>
								<li className="About-skills">&lt;Firebase&gt;</li>
								<li className="About-skills">&lt;MySQL & Sequelize&gt;</li>
								<li className="About-skills">&lt;MongoDB & Mongoose&gt;</li>
								<li className="About-skills">&lt;React.js&gt;</li>
							</ul>
						</Row>
					</Col>

					<Col xs={1}></Col>
				</Row>
			</div>
		);
	}
}


export default About;

