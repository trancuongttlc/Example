'use strict';
import React from 'react';
import {render} from 'react-dom';
import AppBar from 'material-ui/AppBar';

class Layout extends React.Component {
    render() {
        return (
        	<div>
        		<div className="col-md-10 col-md-offset-1">
					<AppBar/>
        		</div>
				<div className="col-md-10 col-md-offset-1">
					{this.props.children}
        		</div>
        		<div className="col-md-10 col-md-offset-1">
					<h4 className="text-center">Hello</h4>
        		</div>
        	</div>
        );
    }

}

export default Layout;

