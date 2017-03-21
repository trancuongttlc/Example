import React from 'react';
import axios from 'axios';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import Reset from 'material-ui/svg-icons/action/cached';
import Done from 'material-ui/svg-icons/action/done-all';
class LoginComponent extends React.Component {

	constructor(props) {
    	super(props);
  	}

	render() {
		return(
		  	<form className="form-style" >
		    	<h2>Hello, Login Page!</h2>
		    	<div className="col-md-8 col-md-offset-2">
		    		<TextField
		    			type="email"
			      		floatingLabelText="Email"
			      		fullWidth={true}
			    	/>	
			    	<TextField
		    			type="password"
			      		floatingLabelText="Password"
			      		fullWidth={true}
			    	/>
		    	</div>
		    	<div className="clearfix"></div>
			   	<RaisedButton icon={<Done />} type="submit" primary={true} />
			   	<RaisedButton icon={<Reset />} type="reset" />
			</form>

		)
	}

	  	
}

export default LoginComponent