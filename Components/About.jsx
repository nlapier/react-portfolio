import React, { Component } from "react";
import Boostrap from "react-bootstrap";

class About extends Component {

	preloader() {
  		return <img src="spinner.gif" />;
	}

	render() {
		//prop const here

		return (
			<div>
				<h1 className="text-center col-xs-12">About Me</h1>

				<p className="col-md-9">
					Born and raised in Austin, TX, I studied economics at Trinity University before moving to New York City in 2010.   I am currently studying full stack web development at Rutgers Coding Bootcamp,  with the goal of working as a junior developer when I graduate in October.  I pay my bills working as a handyman on Taskrabbit, and a courier on UberRUSH. When I&#8217;m not coding or working, I like to explore, travel, volunteer, ride my bicycle and motorcycle, and plot to import breakfast tacos and the word &#34;y&#8217;all&#34; to NYC.
				</p>

				<img src="https://avatars2.githubusercontent.com/u/17186793?v=3&s=400" alt="Nathaniel LaPier" className="img-circle img-responsive col-md-3" />

				<p className>
					In addition to HTML, CSS and vanilla JavaScript, I can hold my own using:
				</p>

				<ul>
					<li>jQuery</li>
					<li>Node.js</li>
					<li>Express.js</li>
					<li>Firebase</li>
					<li>MySQL</li>
					<li>MongoDB</li>
					<li>React.js</li>
				</ul>
				
			</div>
		);
	}
}

export default About;

/*
		import ImageLoader from "react-imageloader";

				<ImageLoader src="./Headshot2.jpg" wrapper={React.DOM.div} preloader={this.preloader}>
				Image did not load
				</ImageLoader>


// import headshot from "./Headshot2.jpg";

				<img src={headshot} alt="Nathaniel LaPier" className="img-circle img-responsive col-md-3" />
				npm install imagemin-pngquant imagemin-svgo imagemin-optipng imagemin-jpegtran imagemin-gifsicle file-loader imagemin loader-utils

*/

