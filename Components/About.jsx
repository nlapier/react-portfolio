import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import Radium from "radium";
import Titlebar from "./Titlebar";
import Paragraph from "./Paragraph";

class About extends Component {

	render() {
		//prop const here

		return (

			<div>

				<Titlebar title="About Me" />

				<Row className="show-grid">

					<img 
						src={"/assets/images/Headshot2.jpg"} 
						alt="Nathaniel LaPier" 
						className="img-square img-responsive" 
						style={styles.headshot}
					/>

					<Paragraph text={bioText} />

				</Row>

				<br />
				<br />
				<br />

				<Row className="text-center" style={styles.p}>
					<p>
						In addition to HTML, CSS and vanilla JavaScript, I can hold my own using:
					</p>

					<ul className="list-inline text-center">
						<li style={styles.skills}>jQuery</li>
						<li style={[styles.skills, styles.skillsborder]}>Node.js</li>
						<li style={[styles.skills, styles.skillsborder]}>Express.js</li>
						<li style={[styles.skills, styles.skillsborder]}>Firebase</li>
						<li style={[styles.skills, styles.skillsborder]}>MySQL</li>
						<li style={[styles.skills, styles.skillsborder]}>MongoDB</li>
						<li style={[styles.skills, styles.skillsborder]}>React.js</li>
					</ul>
				</Row>
			</div>
		);
	}
}

const bioText = "Born and raised in Austin, TX, I studied economics at Trinity University before moving to New York City in 2010.   I am currently studying full stack web development at Rutgers Coding Bootcamp,  with the goal of working as a junior developer when I graduate in October.  I pay my bills working as a handyman on Taskrabbit, and a courier on UberRUSH. When I'm not coding or working, I like to explore, travel, volunteer, ride my bicycle and motorcycle, and plot to import breakfast tacos and the word \"y'all\" to NYC.";

const styles = {
	p:{
		"font-size": "22pt"
	},
	skills:{    
		"padding-left": "20px",
	    "padding-right": "20px"
	},
	skillsborder:{
		"border-left": "2px #CCCCCC solid"
	},
	headshot: {
		"float": "right",
		"max-width": "20%",
		"max-height": "20%",
		"margin": "5px 20px 10px 25px",
		"border": "1px #CCCCCC solid"
	}
}

export default Radium(About);



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

