import React from 'react';
import '../../styles/button.css';

const Button = props => {
	const buttonType = props.className;
	return(
		<div className="spacing">
			<button id={buttonType}>{props.name}</button>
		</div>
	);
};

export default Button;