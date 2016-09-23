import React from 'react';

import { Route } from 'react-router';

//Base component, including nav bar
import Application from './Components/Application';



export default (
	<Route component={Application}>
		<Route path="/" component={IndexPage} />

	</Route>
);