import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route, hashHistory, Link, IndexRoute, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {teal400, grey800, red800} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import HomeComponent from './component/homeCPN/homeComponent.jsx';
import AuthComponent from './component/authCPN/authComponent.jsx';
import ErrorComponent from './component/errorCPN/errorComponent.jsx';
import LayoutComponent from './component/layoutCPN/layoutComponent.jsx'

class App extends React.Component {

    render() {
        return (
        	<Router history={hashHistory}>
                <Route path="/" component={LayoutComponent}>
                    <IndexRoute component={AuthComponent} />
                    <Route path="auth" component={AuthComponent}/>
                    <Route path="home" component={HomeComponent}/>
                </Route>
                <Route path="*" component={ErrorComponent}/>
            </Router>
        );  
    }

}

const customTheme = getMuiTheme({
    fontFamily: 'Roboto, sans-serif',
    palette   : {
        primary1Color: teal400,
        textColor    : grey800,
        accent1Color : red800
    }
});

render(
    <Provider><MuiThemeProvider muiTheme={customTheme}><App/></MuiThemeProvider></Provider>, 
    document.getElementById('container')
);
// https://www.youtube.com/watch?v=53SNhzt7AqA