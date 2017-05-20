import React from 'react';
import { Route , IndexRoute} from 'react-router';

import Layout from './components/layout/layout';
import Home from './components/home/home';
import Login from './components/auth/login';
import Register from './components/auth/register';

export default (
	<Route path="/" component={Layout}>
		<IndexRoute component={Home} />
		<Route path="home" component={Home} />
		<Route path="login" component={Login} />
		<Route path="register" component={Register} />
	</Route>
)