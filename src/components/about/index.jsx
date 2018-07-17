import React from 'react';
import swipeIcon from '../../styles/assets/swipe_icon.svg';
import '../../styles/about.css';

const About = props => {
	return(
		<div id="aboutContainer">
			<table className="center">
				<thead>
					<tr>
						<td>
							<h1>{props.props.about.name}</h1>
						</td>
					</tr>
				</thead>
				<tbody >
					<tr>
						<td>
							<img className="center imgSize" name='name' src={props.props.about.image} alt='altText' />
						</td>
					</tr>
					<tr>
						<td>
							{props.props.about.bio}
						</td>
					</tr>
					<tr>
						<td>
							<img className="center swipe" name='swipe' src={swipeIcon} alt='swipeIcon' />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default About;