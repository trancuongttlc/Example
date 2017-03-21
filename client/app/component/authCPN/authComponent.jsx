import React from 'react';
import axios from 'axios';
import {Tabs, Tab} from 'material-ui/Tabs';
import Layout from '../layoutCPN/layoutComponent.jsx';

import Register from './registerComponent.jsx';
import Login from './loginComponent.jsx';

import './auth.css';

class AuthComponent extends React.Component {

  	constructor(props) {
    	super(props);
    	this.state = {
	      	value: 'a',
	    };
	    this.handleChangeA = this.handleChangeA.bind(this);
	    this.handleChangeB = this.handleChangeB.bind(this);
  	}

  	handleChangeA(value) {
    	this.setState({
      		value: 'a'	
    	});
  	};

  	handleChangeB(value) {
    	this.setState({
      		value: 'b'
    	});
  	};


  	render() {
    	return (
	    	<div className="col-md-8 col-md-offset-2">
			    <Tabs
			    	value={this.state.value}
        			onChange={this.handleChange}
			    >
			        <Tab onClick={this.handleChangeA} label="Register" value="a" >
			          	<div className="text-center">
				          	<Register />
			          	</div>
			        </Tab>

			        <Tab  onClick={this.handleChangeB} label="Login" value="b">
			          	<div className="text-center">
			            	<Login />
			          	</div>
			        </Tab>
		      	</Tabs>
		    </div>
	    );
  	}
}

export default AuthComponent;