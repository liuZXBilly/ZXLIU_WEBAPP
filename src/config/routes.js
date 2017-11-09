import React from 'react'
import {Router, Route} from 'react-router'
import Home from '../features/Home'

const routes = (
	<Router>
		<Route exact path='/' component={Home} />
	</Router>
);

export default routes