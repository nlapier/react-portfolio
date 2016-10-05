import React, { Component, cloneElement } from 'react';
import {Grid, Row, Col} from "react-bootstrap";
import Navbar from "./Navbar";
import "./Application.css";


class Application extends Component {


	render() {

		return (

			<div>

				<Navbar/>

				<Grid>

					<div id="Application" className="Application_main">

						{
							cloneElement(this.props.children)
						}

					</div>
				</Grid>

			</div>
		)
	}
}

export default Application;






