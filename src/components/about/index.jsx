import React from 'react';

const About = props => {
	const background ={
		backgroundColor: '#F2F2F2'
	}
	
	const center = {
		margin: 'auto'
	}

	const centerText = {
		textAlign: 'center'
	}

	const imgSize = {
		width: '200px',
		height: '200px',
		borderRadius: '100%',
		border: '1px solid black'
	}

	const fontLg = {
		fontSize: '24px'
	}

	const fontMed = {
		fontSize: '20px'
	}

	// console.log(props.props);
	return(
		<div style={Object.assign({}, centerText, background)}>
			<h1>About Component</h1>
			<table style={center}>
				<tbody >
					<tr>
						<td style={fontLg}>
							{props.props.about.name}
						</td>
					</tr>
					<tr>
						<td>
							<img style={Object.assign({}, imgSize, center)} name='name' src={props.props.about.image} alt='altText' />
						</td>
					</tr>
					<tr>
						<td style={fontMed}>
							Bio: {props.props.about.bio}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default About;