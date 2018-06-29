import React from 'react';
import logo from '../../styles/assets/HTML5_Logo.svg';


const Technology = props => {
	const techLogo = {
		width: '50px',
		height: '50px',
		'marginRight': '5px',
		border: '1px dashed red'
	}

	const techList = props.technology;
	let techItem = techList.map((arrayItem, i) => {
		let [name, logo, altText] = [arrayItem.name, arrayItem.logo, arrayItem.altText];
		return(
			<img style={techLogo} key={i} name={name} src={logo} alt={altText} />
		);
	});
	
	return(
		<div>
			{techItem}
		</div>
	);
};

export default Technology;