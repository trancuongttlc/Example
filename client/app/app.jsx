import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, Link, IndexRoute} from 'react-router';
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
                    <Route path="login" component={AuthComponent}/>
                    <Route path="home" component={HomeComponent}/>
                    <Route path="*" component={ErrorComponent}/>
                </Route>
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

render(<MuiThemeProvider muiTheme={customTheme}><App/></MuiThemeProvider>, document.getElementById('container'));