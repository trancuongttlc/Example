import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory, hashHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import routes from './routes';

const store = createStore(
	(state={}) => state,
	applyMiddleware(thunk)
);

render(
	<MuiThemeProvider>
		<Provider store={store} >
	    	<Router history={hashHistory} routes={routes}/>
		</Provider>
	</MuiThemeProvider>,
    document.getElementById('app')
);
