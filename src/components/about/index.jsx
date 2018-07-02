import React from 'react';
import '../../styles/about.css';

const About = props => {
	return(
		<div className="centerText background">
			<h1>About Component</h1>
			<table className="center">
				<tbody >
					<tr>
						<td className="fontLg">
							{props.props.about.name}
						</td>
					</tr>
					<tr>
						<td>
							<img className="center imgSize" name='name' src={props.props.about.image} alt='altText' />
						</td>
					</tr>
					<tr>
						<td className="fontMed">
							Bio: {props.props.about.bio}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default About;