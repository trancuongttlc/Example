import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import List from 'material-ui/svg-icons/action/reorder';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import Home from 'material-ui/svg-icons/action/home';
import Contact from 'material-ui/svg-icons/communication/import-contacts';	
import Users from 'material-ui/svg-icons/social/group';	
import Log from 'material-ui/svg-icons/navigation/subdirectory-arrow-right';	



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
		          	<MenuItem leftIcon={<Contact />}>Contact</MenuItem>
				    <MenuItem leftIcon={<Users />}>Users</MenuItem>
				    <MenuItem href="#/auth" leftIcon={<Log />}><b>Logout</b></MenuItem>
		        </Drawer>
				<div className="col-md-10 col-md-offset-1">
					{this.props.children}
				</div>
				<div className="clearfix"></div>
				<div className="col-md-10 col-md-offset-1">
					<h5 className="text-center">Copy@right</h5>
				</div>
			</div>
		);
	}

}


export default Header;