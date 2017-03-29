import React from 'react';
import axios from 'axios';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router';

import Reset from 'material-ui/svg-icons/action/cached';
import Done from 'material-ui/svg-icons/action/done-all';
class LoginComponent extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {
    		email    : '',
    		password : ''
    	}
    	this.loginComponent = this.loginComponent.bind(this);
  	}

  	handleChange (field ,event) {
  		this.setState({ [field]: event.target.value });
  	}

  	loginComponent(e) {
  		let data = this.state;
  		axios.post('/api/users/login', data).then(result => {
  			if(result.data.status) {
  				localStorage.setItem('token', result.data.data.token);
  				browserHistory.push('/#/home');
  			}
  		}).catch(error => console.log(error));
  	}

	render() {
		return(
		  	<form className="form-style" onSubmit={this.loginComponent} >
		    	<h2>Hello, Login Page!</h2>
		    	<div className="col-md-8 col-md-offset-2">
		    		<TextField
		    			type="email"
			      		floatingLabelText="Email"
			      		fullWidth={true}
			      		value={this.state.email}
		    			onChange={this.handleChange.bind(this, 'email')}
			    	/>	
			    	<TextField
		    			type="password"
			      		floatingLabelText="Password"
			      		fullWidth={true}
			      		value={this.state.password}
		    			onChange={this.handleChange.bind(this, 'password')}
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