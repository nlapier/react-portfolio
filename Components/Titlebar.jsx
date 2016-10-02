import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap";
import styles from "./Titlebar.css";


class Titlebar extends Component {


	render() {

		return (
			<Row className="show-grid">
				<Col xsHidden md={2}></Col>

				<Col xs={12} md={8}>
					<h1 className={styles.Titlebar_title}>{this.props.title}</h1>
				</Col>

				<Col xsHidden md={2}></Col>
			</Row>
		);
	}
}

export default Titlebar;

// const styles = {
// 	title: {
// 		"color": "#DFF0D8",
// 		"margin-top": "70px",
// 		"margin-bottom": "4%",
// 		"font-size": "70pt",
// 		"font-style": "bold",
// 		"border-top": "2px #CCCCCC solid",
// 		"border-bottom": "2px #CCCCCC solid"
// 	}
// }

/*
"text-center col-xs-12 col-md-8"


<img src="https://avatars2.githubusercontent.com/u/17186793?v=3&s=400" alt="Nathaniel LaPier" className="img-circle img-responsive col-md-4" />


		import ImageLoader from "react-imageloader";


				<ImageLoader src="./Headshot2.jpg" wrapper={React.DOM.div} preloader={this.preloader}>
				Image did not load
				</ImageLoader>


// import headshot from "./Headshot2.jpg";

				<img src={headshot} alt="Nathaniel LaPier" className="img-circle img-responsive col-md-3" />
				npm install imagemin-pngquant imagemin-svgo imagemin-optipng imagemin-jpegtran imagemin-gifsicle file-loader imagemin loader-utils

*/

