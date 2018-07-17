import React from 'react';
import '../../styles/technology.css';

const Technology = props => {
	const techLogo = {
		display: 'inline-block',
		margin: '0 5px 0 0'
	}

	const techList = props.technology;
	let techItem = techList.map((arrayItem, i) => {
		let [name, logo, altText] = [arrayItem.name, arrayItem.logo, arrayItem.altText];
		return(
			<img style={techLogo} className="techLogo" key={i} name={name} src={logo} alt={altText} />
		);
	});
	
	return(
		<div className="center">
			{techItem}
		</div>
	);
};

export default Technology;