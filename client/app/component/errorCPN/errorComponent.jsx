import React from 'react';
import './error.css';
class ErrorComponent extends React.Component {

	render() {
		return (
			<div className="bg-error-page">
				<a className="come-back" href="/#/home">Come back home</a>
			</div>
		);
	}

}

export default ErrorComponent;