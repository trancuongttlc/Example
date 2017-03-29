import React from 'react';
import axios from 'axios';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import Add from 'material-ui/svg-icons/content/add';
import Reset from 'material-ui/svg-icons/action/cached';

class RegisterComponent extends React.Component {

	constructor(props) {
    	super(props);

    	this.state = {
			name     : '',
			email    : '',
			password : '',
			address  : '',
			phone    : '',
			sex      : '',
    	}
    	this.handleChangeRequest = this.handleChangeRequest.bind(this);
    	this.register            = this.register.bind(this);
  	}

	handleChangeRequest(field, event) {
		this.setState({ [field]: event.target.value });
	}

	register() {
		let data = this.state;
		axios.post('/api/users', data).then(result => {
			if(result.data.status) {
				alert('success');
			}else {
				alert(result.data.message);
			}
		}).catch(err => console.log(err));
	}

	render() {
		return(
		  	<form className="form-style" onSubmit={this.register}>
		    	<h2>Wellcome to create new user page !</h2>
		    	<div className="col-md-6">
		    		<TextField
		    			type="text"
		    			value={this.state.name}
		    			onChange={this.handleChangeRequest.bind(this, 'name')}
			      		floatingLabelText="Name"
			      		fullWidth={true}
			    	/>
		    	</div>
		    	<div className="col-md-6">
		    		<TextField
		    			type="Email"
		    			value={this.state.email}
		    			onChange={this.handleChangeRequest.bind(this, 'email')}
			      		floatingLabelText="Email"
			      		fullWidth={true}
			    	/>
		    	</div>
		    	<div className="col-md-6">
				    <TextField
				    	type="password"
				    	value={this.state.password}
				    	onChange={this.handleChangeRequest.bind(this, 'password')}
				      	floatingLabelText="Password"
				      	fullWidth={true}
				    />
				</div>
				<div className="col-md-6">
				    <TextField
				      	floatingLabelText="Confirm Password"
				      	fullWidth={true}
				    />
				</div>
				<div className="col-md-6">
				    <TextField
				    	type="text"
				    	value={this.state.address}
				    	onChange={this.handleChangeRequest.bind(this, 'address')}
				      	floatingLabelText="Address"
				      	fullWidth={true}
				    />
				</div>
				<div className="col-md-6">
				    <TextField
				    	type="phone"
				    	value={this.state.phone}
				    	onChange={this.handleChangeRequest.bind(this, 'phone')}
				      	floatingLabelText="Phone"
				      	fullWidth={true}
				    />
				</div>
			   	<RaisedButton icon={<Add />} type="submit" primary={true} />
			   	<RaisedButton icon={<Reset />} type="reset" />
			</form>

		)
	}

	  	
}

export default RegisterComponent;