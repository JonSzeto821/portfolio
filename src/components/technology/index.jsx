import React from 'react';
import '../../styles/technology.css';

const Technology = props => {
	const techLogo = {
		display: 'inline-block'
	}

	const techList = props.technology;
	
	let techItem = techList.map((arrayItem, i) => {
		let [name, logo, altText] = [arrayItem.name, arrayItem.logo, arrayItem.altText];
		return(
			<img style={techLogo} className="techLogo" key={i} name={name} src={logo} alt={altText} />
		);
	});
	
	return(
		<div className="technology">
			{techItem}
		</div>
	);
};

export default Technology;