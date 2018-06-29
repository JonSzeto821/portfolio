import React from 'react';
import GHIcon from '../../styles/assets/GH_Icon.svg';
import LIIcon from '../../styles/assets/LI_Icon.svg';
import EmailIcon from '../../styles/assets/Email_Icon.svg';

const Contact = props => {
	// console.log('Contact Props', props);
	const logoSize  = {
		height: '32px',
		width: '32px'
	};

	const borderStyle = {
		border: '1px solid black',
		padding: '5px'
	}

	return(
		<div>
			<table>
				<tbody>
					<tr>
						<td style={borderStyle}><img style={logoSize} id="GHIcon" src={GHIcon} alt="GitHub Icon" /></td>
						<td style={borderStyle}><img style={logoSize} id="LIIcon" src={LIIcon} alt="LinkedIn Icon" /></td> 
						<td style={borderStyle}><img style={logoSize} id="EmailIcon" src={EmailIcon} alt="Email Icon" /></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Contact;