//===React Dependencies===
import React from 'react';

import { Route, Router, hashHistory } from 'react-router';

//===Import Components===

//Base component, including nav bar
import Application from './src/Pages/Application/Application.jsx';

//About section
import About from './src/Pages/About/About.jsx';

//Portfolio section
import Portfolio from './src/Pages/Portfolio/Portfolio.jsx';

//Contact page
import Contact from './src/Pages/Contact/Contact.jsx';

export default (
		<Route component={Application}>
			<Route path="/" component={About} />
			<Route path="Portfolio" component={Portfolio} />
			<Route path="Contact" component={Contact} />
		</Route>
);