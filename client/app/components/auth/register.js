'use strict';
import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import Login from './login'; 
import {userSingupRequest} from '../../actions/signupActions';

class Register extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			name            : "",
			email           : "",
			password        : "",
			confirmPassword : "",
			address         : "",
			phone           : ""	
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name] : e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault()
		console.log(userSingupRequest);
		// this.state.userSingupRequest(this.state);
	}

    render() {

        return (
        	<div className="row">
        		<div className="col-md-8 col-md-offset-2">
        			<form onSubmit={this.onSubmit}>
        				<h1>Join our community</h1>
        				<div className="form-group pull-left col-md-6">
        					<label className="control-label">Name</label>
        					<input type="text" value={this.state.name} onChange={this.onChange} className="form-control" name="name" />
        				</div>
        				<div className="form-group pull-right col-md-6">
        					<label className="control-label">Email</label>
        					<input type="email" value={this.state.value} onChange={this.onChange} className="form-control" name="email" />
        				</div>
        				<div className="form-group pull-left col-md-6">
        					<label className="control-label">Password</label>
        					<input type="password" value={this.state.password} onChange={this.onChange} className="form-control" name="password" />
        				</div>
        				<div className="form-group pull-right col-md-6">
        					<label className="control-label">Confirm Password</label>
        					<input type="password" value={this.state.confirmPassword} onChange={this.onChange} className="form-control" name="confirmPassword" />
        				</div>
        				<div className="form-group pull-left col-md-6">
        					<label className="control-label">Address</label>
        					<input type="text" value={this.state.address} onChange={this.onChange} className="form-control" name="address" />
        				</div>
        				<div className="form-group pull-right col-md-6">
        					<label className="control-label">Phone</label>
        					<input type="text" value={this.state.phone} onChange={this.onChange} className="form-control" name="phone" />
        				</div>
        				<div className="form-group pull-left col-md-6">
        					<label className="control-label">Sex</label>
        					<select value={this.state.sex} onChange={this.onChange} className="form-control">
        						<option value="" disabled>Choose Your Sex</option>
        						<option>Falde</option>
        						<option>Made</option>
        					</select>
        				</div>
        				<div className="form-group pull-left col-md-6">
        					<label className="control-label">Level</label>
        					<select value={this.state.level} onChange={this.onChange} className="form-control">
        						<option value="" disabled>Choose Your Sex</option>
        						<option>Falde</option>
        						<option>Made</option>
        					</select>
        				</div>
        				<div className="form-group col-md-6">
        					<button className="btn btn-primary btn-lg">Sign up!</button>
        				</div>
        			</form>
        		</div>
        	</div>
        );

    }

}

Register.propTypes = {
	userSingupRequest: React.PropTypes.func
}

export default connect(null, {userSingupRequest})(Register);

