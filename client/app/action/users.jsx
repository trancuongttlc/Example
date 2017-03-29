'use strict';

import axios from 'axios';

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const REGISTER      = 'REGISTER';
export const EDIT_PROFILE  = 'EDIT_PROFILE';
export const DELETE_USER   = 'DELETE_USERS';

const ROOT_URL = 'localhost:3004/api';

export function getAllUsers(tokenFromStorage) {

  	const request = axios({
	    method: 'get',
	    url: `${ROOT_URL}/users`,
  	});
  	return {
    	type: GET_ALL_USERS,
    	payload: request
  	};
  	
}