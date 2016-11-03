import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Titlebar from "../../Components/Titlebar/Titlebar.jsx";
import "./About.css";

class About extends Component {

	render() {
		const welcomeText = "Welcome!  My name is Nathaniel LaPier; thanks for visting my site."

		const bioText = "Born and raised in Austin, TX, I studied economics at Trinity University before moving to New York City in 2010.  I'm an aspiring full-stack web developer with both self-starter experience and a formal education in web development from Rutgers Coding Bootcamp.  I pay my bills working as a handyman on Taskrabbit, and a courier on UberRUSH. When I'm not coding or working, I like to explore, volunteer, ride my bicycle and motorcycle, root for the Spurs, and plot to import breakfast tacos and the word \"y'all\" to NYC.";

		const moreText = "Please have a look at some of my projects in the Portfolio section.  You can view my code, find me on LinkedIn, and reach out to me directly on the Contact page."

		return (

			<div>
				<Titlebar title="About Me" />

				<Row>
					<Col xs={1}></Col>

					<Col xs={10}>

						<Row className="show-grid About-welcome">

							<h1>{ welcomeText }</h1>

						</Row>

						<br/>

						<Row className="show-grid">

							<img 
								src="/assets/images/Headshot2.jpg" 
								alt="Nathaniel LaPier" 
								className="img-square img-responsive About-headshot" 
							/>

							<p>{ bioText }</p>

						</Row>

						<br />
						<br />
						<br />

						<Row className="text-center">
							<p>
								In addition to HTML, CSS and vanilla JavaScript, I can hold my own using:
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

