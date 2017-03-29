import React from 'react';
import axios from 'axios';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
class EditProfileComponent extends React.Component {

	constructor(props) {

    	super(props);
    	this.state = {
    		name      : this.props.user.name,
    		email     : this.props.user.email,
    		address   : this.props.user.address,
    		phone     : this.props.user.phone,
    		sex       : this.props.user.sex
    	}
  	}

	handleChangeRequest(field, event) {
		this.setState({ [field]: event.target.value });
	}


  	editProfile(data) {
  		let id       = data.id;
  		let new_data = this.state;

  		axios({
	        method : 'post',
	        url    : '/api/users/editProfile/' + id,
	        data   : new_data
	    }).then(function (response) { 
	        console.log(response);
	    }).catch(err => console.log(err));
  	}

	render() {
		return(
        	<form className="form-style" onSubmit={this.editProfile.bind(this, this.props.user)}>
    			<div className="col-md-4 pull-left">
	        		<img src={'../../images/error-page.jpg'} height="100" width="100" />
			    </div>
    			<div className="col-md-8 pull-right">
	        		<TextField
	        			value={this.state.name}
	        			onChange={this.handleChangeRequest.bind(this, 'name')}
		    			type="text"
			      		floatingLabelText="Name"
			    	/>
			    	<TextField
	        			value={this.state.phone}
			    		onChange={this.handleChangeRequest.bind(this, 'phone')}
		    			type="text"
			      		floatingLabelText="Phone"
			    	/>
			    	<TextField
			    		disabled
			    		value={this.state.email}
		    			type="email"
			      		floatingLabelText="Email"
			    	/> 
			    	<TextField
			    		value={this.state.address}
			    		onChange={this.handleChangeRequest.bind(this,'address')}
		    			type="text"
			      		floatingLabelText="Address"
			    	/> 
			    	<TextField
			    		value={this.state.sex}
			    		onChange={this.handleChangeRequest.bind(this, 'sex')}
		    			type="text"
			      		floatingLabelText="Sex"
			    	/>
		    	</div>
		    	<div className="clearfix"></div>
		    	<RaisedButton type="submit" label="Save" primary={true}  />
        	    <RaisedButton label="Cancle" />
			</form>
		)
	}
}

export default EditProfileComponent;

