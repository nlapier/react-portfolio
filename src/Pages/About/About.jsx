import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Titlebar from "../../Components/Titlebar/Titlebar.jsx";
import AboutSkill from "../../Components/AboutSkill/AboutSkill.jsx";
import "./About.css";
import {welcomeText, bioText, moreText, inAddition, skills} from "../../text.js";

class About extends Component {

	render() {

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

							<ul className ="list-inline text-center">
								{skills.map((skill, index) => 
									<AboutSkill
										text={skill}					
										key={"AboutSkill-", index}
									/>
								)}
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

