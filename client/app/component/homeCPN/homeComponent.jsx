import React from 'react';
import axios from 'axios';
import Layout from '../layoutCPN/layoutComponent.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';

import Done from 'material-ui/svg-icons/action/done-all';
import Edit from 'material-ui/svg-icons/content/create';
import Clear from 'material-ui/svg-icons/content/remove';

import EditProfileComponent from './editProfileComponent.jsx';
import './home.css';
const style = {
	modal : {
		width: '70%',
		maxWidth: 'none'
	}
}

class HomeComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			openConfirm: false,
			openModal  : false,
			user: null,
		}
		this.handleCloseConfirm = this.handleCloseConfirm.bind(this);
	}

	componentDidMount() {
		this.selectAllUser();
	}

	handleOpenModal (user) {
    	this.setState({openModal: true, user: user});
  	};

	handleOpenConfirm (user) {
		this.props.userId = user.id;
	    this.setState({openConfirm: true});
	};

	handleCloseConfirm () {
	    this.setState({openConfirm: false});
	};

	selectAllUser() {
		axios.get('/api/users').then(result => {
			this.setState({ data: result.data.data });
		}).catch(err => console.log(err)); 
	}

	removeUser(userId) {
		axios.delete('/api/users/' + userId).then(result => {
			this.setState({loading: true});
		}).catch(err => console.log(err)); 
	}

	render() {

		return (
			<div className="x_content">
				<Table bodyStyle={{minWidth:1250, paddingBottom: '10px'}} headerStyle={{minWidth:1250}} className="table-scroll-data-management" height={400} multiSelectable={false}
                   selectable={false} fixedHeader={true} fixedFooter={true}>
			    	<TableHeader displaySelectAll={false} enableSelectAll={false} adjustForCheckbox={false}>
					    <TableRow>
					        <TableHeaderColumn className="col-md-1">ID</TableHeaderColumn>
					        <TableHeaderColumn className="col-md-1">Avatar</TableHeaderColumn>
					        <TableHeaderColumn className="col-md-1">Name</TableHeaderColumn>
					        <TableHeaderColumn className="col-md-2">Email</TableHeaderColumn>
					        <TableHeaderColumn className="col-md-2">Address</TableHeaderColumn>
					        <TableHeaderColumn className="col-md-2">Phone</TableHeaderColumn>
					        <TableHeaderColumn className="col-md-1">Sex</TableHeaderColumn>
					        <TableHeaderColumn className="col-md-2">Action</TableHeaderColumn>
					    </TableRow>
			    	</TableHeader>
				    <TableBody displayRowCheckbox={false}>
				    	{this.state.data.map((user, index) => (
					      	<TableRow>
					        	<TableRowColumn className="col-md-1">{index + 1}</TableRowColumn>
					        	<TableRowColumn className="col-md-1"><img src={user.avatar} height="80" width="60" /></TableRowColumn>
						        <TableRowColumn className="col-md-1">{user.name}</TableRowColumn>
						        <TableRowColumn className="col-md-2">{user.email}</TableRowColumn>
						        <TableRowColumn className="col-md-2">{user.address}</TableRowColumn>	
						        <TableRowColumn className="col-md-2">{user.phone}</TableRowColumn>
						        <TableRowColumn className="col-md-1">{user.sex}</TableRowColumn>
						        <TableRowColumn className="col-md-2">
					        		<RaisedButton alt="Edit user" onClick={this.handleOpenModal.bind(this, user)} icon={<Edit />} primary={true}  />-
    								<RaisedButton onClick={this.handleOpenConfirm.bind(this, user)} alt="Delete user" icon={<Clear />} secondary={true} />
					        	</TableRowColumn>
					      	</TableRow>
					    ))}
				    </TableBody>
				</Table>
				<Dialog
					className="confirm-delete"
		          	title="Are you sure delete this user ?"
		          	modal={true}
		          	open={this.state.openConfirm}
		        >
		          	<RaisedButton onClick={this.removeUser.bind(this, this.props.userId)} label="Ok" primary={true}  />
		          	<RaisedButton onClick={this.handleCloseConfirm} label="Cancle" />
		        </Dialog>
		        <Dialog
		        	contentStyle={style.modal}
		        	className="col-lg-10"
		          	title="Edit Profile"
		          	modal={true}
		          	open={this.state.openModal}
		        >
    	    		<EditProfileComponent user={this.state.user} />
		        </Dialog>
            </div>
		);
	}
}

export default HomeComponent;