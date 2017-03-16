import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, Link, IndexRoute} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HomeComponent from './component/homeCPN/homeComponent.jsx';
import AuthComponent from './component/authCPN/loginComponent.jsx';
import ErrorComponent from './component/errorCPN/errorComponent.jsx';


class App extends React.Component {

    render() {
        return (
        	<Router history={hashHistory}>
                <Route path="/" component={HomeComponent}/>
                <Route path="chai" component={AuthComponent}/>
                <Route path="lo" component={ErrorComponent}/>
            </Router>
        );
    }

}

render(<MuiThemeProvider><App/></MuiThemeProvider>, document.getElementById('container'));