import React from 'react';
import GHIcon from '../../styles/assets/GH_Icon.svg';
import LIIcon from '../../styles/assets/LI_Icon.svg';
import EmailIcon from '../../styles/assets/Email_Icon.svg';
import '../../styles/contact.css';

const Contact = props => {
	return(
		<div>
			<table>
				<tbody>
					<tr>
						<td className="borderStyle"><img className="logoSize" id="GHIcon" src={GHIcon} alt="GitHub Icon" /></td>
						<td className="borderStyle"><img className="logoSize" id="LIIcon" src={LIIcon} alt="LinkedIn Icon" /></td> 
						<td className="borderStyle"><img className="logoSize" id="EmailIcon" src={EmailIcon} alt="Email Icon" /></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Contact;