import React from 'react';

import { Route } from 'react-router';

//Base component, including nav bar
import Application from './Components/Application';

import Portfolio from './Components/Portfolio';

import Contact from './Components/Contact';


export default (
	<Route component={Application}>
		<Route path="/" component={About} />
		<Route path="Portfolio" component={Portfolio} />
		<Route path="Contact" component={Contact} />
	</Route>
);