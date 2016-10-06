import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Titlebar from "../../Components/Titlebar/Titlebar.jsx";
import Paragraph from "../../Components/Paragraph/Paragraph.jsx";
import "./About.css";

class About extends Component {

	render() {
		const bioText = "Born and raised in Austin, TX, I studied economics at Trinity University before moving to New York City in 2010.   I am currently studying full stack web development at Rutgers Coding Bootcamp,  with the goal of working as a junior developer when I graduate in October.  I pay my bills working as a handyman on Taskrabbit, and a courier on UberRUSH. When I'm not coding or working, I like to explore, travel, volunteer, ride my bicycle and motorcycle, and plot to import breakfast tacos and the word \"y'all\" to NYC.";

		return (

			<div>
				<Titlebar title="About Me" />

				<Row>
					<Col xs={1}></Col>

					<Col xs={10}>

						<Row className="show-grid">

							<img 
								src="/assets/images/Headshot2.jpg" 
								alt="Nathaniel LaPier" 
								className="img-square img-responsive About-headshot" 
							/>

							<Paragraph text={bioText} />

						</Row>

						<br />
						<br />
						<br />

						<Row className="text-center">
							<p>
								In addition to HTML, CSS and vanilla JavaScript, I can hold my own using:
							</p>

							<ul className="list-inline text-center">
								<li className="About-skills" style={{borderLeft: "none"}}>jQuery</li>
								<li className="About-skills">Node.js</li>
								<li className="About-skills">Express.js</li>
								<li className="About-skills">Firebase</li>
								<li className="About-skills">MySQL & Sequelize</li>
								<li className="About-skills">MongoDB & Mongoose</li>
								<li className="About-skills">React.js</li>
								<li className="About-skills">PHP & Laravel</li>

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



/*

<img src="https://avatars2.githubusercontent.com/u/17186793?v=3&s=400" alt="Nathaniel LaPier" className="img-circle img-responsive col-md-4" />


		import ImageLoader from "react-imageloader";


				<ImageLoader src="./Headshot2.jpg" wrapper={React.DOM.div} preloader={this.preloader}>
				Image did not load
				</ImageLoader>


// import headshot from "./Headshot2.jpg";

				<img src={headshot} alt="Nathaniel LaPier" className="img-circle img-responsive col-md-3" />
				npm install imagemin-pngquant imagemin-svgo imagemin-optipng imagemin-jpegtran imagemin-gifsicle file-loader imagemin loader-utils

*/

