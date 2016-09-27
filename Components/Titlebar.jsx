import React, { Component } from "react";
import Bootstrap from "react-bootstrap";
import Radium from "radium";


class Titlebar extends Component {


	render() {

		return (

			<div className="row">

				<div className="col-md-2"></div>

				<h1 className="text-center col-xs-12 col-md-8"  style={styles.title}>{this.props.title}</h1>

				<div className="col-md-2"></div>

			</div>

		);
	}
}

export default Radium(Titlebar);

const styles = {
	title: {
		"color": "#DFF0D8",
		"margin-top": "70px",
		"margin-bottom": "4%",
		"font-size": "70pt",
		"font-style": "bold",
		"border-top": "2px #CCCCCC solid",
		"border-bottom": "2px #CCCCCC solid"
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

