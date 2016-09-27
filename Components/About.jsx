import React, { Component } from "react";
import Titlebar from "./Titlebar";
import Bootstrap from "react-bootstrap";
import Radium from "radium";


class About extends Component {


	render() {
		//prop const here

		return (

			<div className="col-xs-12">

				<Titlebar title="About Me" />

				<div className="row">

					<img 
						src={"/assets/images/Headshot2.jpg"} 
						alt="Nathaniel LaPier" 
						className="img-square img-responsive" 
						style={styles.headshot}
					/>

					<p style={styles.p}>
						Born and raised in Austin, TX, I studied economics at Trinity University before moving to New York City in 2010.   I am currently studying full stack web development at Rutgers Coding Bootcamp,  with the goal of working as a junior developer when I graduate in October.  I pay my bills working as a handyman on Taskrabbit, and a courier on UberRUSH. When I&#8217;m not coding or working, I like to explore, travel, volunteer, ride my bicycle and motorcycle, and plot to import breakfast tacos and the word &#34;y&#8217;all&#34; to NYC.
					</p>

				</div>

				<br />
				<br />
				<br />

				<div className="row text-center" style={styles.p}>
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
				</div>
			</div>
		);
	}
}

export default Radium(About);

const styles = {
	title: {
		color: "#DFF0D8",
		"font-size": "70pt",
		"font-style": "bold",
		"border-top": "2px #CCCCCC solid",
		"border-bottom": "2px #CCCCCC solid"
	},
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

