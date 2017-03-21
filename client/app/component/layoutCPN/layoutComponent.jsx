import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import List from 'material-ui/svg-icons/action/reorder';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import Home from 'material-ui/svg-icons/action/home';


import './layout.css';
	

class Header extends React.Component {

	constructor(props) {
    	super(props);

    	this.state = {open: false};
    	this.handleToggle = this.handleToggle.bind(this);
    	this.handleClose  = this.handleClose.bind(this);
  	}

  	handleToggle() {
  		this.setState({open: true});
  	}

  	handleClose () { 
  		this.setState({open: false});
  	}

	render() {
		return (
			<div>
				<AppBar 
					isInitiallyOpen={true}
            		iconElementLeft={<FlatButton 
            			icon={<List />}
            			onClick={this.handleToggle} 
            		/>}
					className="menu"
				/>
				<Drawer 
					open={this.state.open}
					onRequestChange={(open) => this.setState({open: false})}
				>
					<AppBar 
						showMenuIconButton={false}
						onClick={this.handleClose}
						iconElementRight={<IconButton><NavigationClose /></IconButton>}
					/>
		          	<MenuItem href="#/home" leftIcon={<Home/>}>Home</MenuItem>
		          	<MenuItem>About</MenuItem>
		          	<MenuItem>News</MenuItem>
		          	<MenuItem>Sale</MenuItem>
		          	<MenuItem>Contact</MenuItem>
				    <MenuItem>Users</MenuItem>
		        </Drawer>

				<div className="col-md-10 col-md-offset-1">
					{this.props.children}
				</div>
				<div className="clearfix"></div>
				<div className="col-md-10 col-md-offset-1">
					<h5 className="text-center">Copy@right React+Nodejs</h5>
				</div>
			</div>
		);
	}

}


export default Header;