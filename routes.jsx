//===React Dependencies===
import React from 'react';

import { Route, Router, hashHistory } from 'react-router';

//===Import Components===

//Base component, including nav bar
import Application from './Components/Application';

//About section
import About from './Components/About';

//Portfolio section
import Portfolio from './Components/Portfolio';

//Contact page
import Contact from './Components/Contact';

export default (
	<Router history={hashHistory}>
		<Route component={Application}>
			<Route path="/" component={About} />
			<Route path="Portfolio" component={Portfolio} />
			<Route path="Contact" component={Contact} />
		</Route>
	</Router>
);