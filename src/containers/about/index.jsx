import React from 'react';
import Contact from '../../components/contact';
import About from '../../components/about';
import AsNavFor from '../../components/carousel';


const AboutContainer = props => {
	const container = {
		border: '2px solid orange',
		margin: '5px',
		padding: '5px'
	}

	// console.log('About props', props, props.about.bio);
return(
	<div style={container}>
	   <h1>About Page</h1>
	   <About props={props} />
	   <Contact />
	   <AsNavFor />
	 </div>
	 );
};

export default AboutContainer;