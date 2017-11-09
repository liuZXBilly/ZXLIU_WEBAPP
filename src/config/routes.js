import React from 'react'
import {Router, Route,hashHistory} from 'react-router'
import Home from '../features/Home'

const routes = (
	<Router history={hashHistory}>
		<Route exact path='/' component={Home} />
	</Router>
);

export default routes