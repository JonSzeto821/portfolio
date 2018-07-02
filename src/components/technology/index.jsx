import React from 'react';

const Technology = props => {
	const techLogo = {
		width: '50px',
		height: '50px',
		margin: '5px',
		display: 'inline-block'
		// border: '1px dashed red'

	}

	const center ={
		textAlign: 'center'
	}

	const techList = props.technology;
	// console.log('techList', techList); 
	let techItem = techList.map((arrayItem, i) => {
		let [name, logo, altText] = [arrayItem.name, arrayItem.logo, arrayItem.altText];
		return(
			<img style={techLogo} key={i} name={name} src={logo} alt={altText} />
		);
	});
	
	return(
		<div style={center}>
			{techItem}
		</div>
	);
};

export default Technology;