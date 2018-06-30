import React from 'react';
import Contact from '../../components/contact';

const ContactContainer = props => {
	const container = {
		border: '2px solid green',
		margin: '5px',
		padding: '5px'
	}

	// console.log('About props', props, props.about.bio);
return(
	<div style={container}>
	   <h1>Contact Page</h1>
	   <Contact />
	 </div>
	 );
};

export default ContactContainer;