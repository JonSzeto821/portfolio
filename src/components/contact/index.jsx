import React from 'react';
import GHIcon from '../../styles/assets/GH_Icon.svg';
import LIIcon from '../../styles/assets/LI_Icon.svg';
import EmailIcon from '../../styles/assets/Email_Icon.svg';
import LocationIcon from '../../styles/assets/location_icon.svg';
import PhoneIcon from '../../styles/assets/phone_icon.svg';
import '../../styles/contact.css';
import '../../styles/projectTemplate.css';

const Contact = props => {
	const email = props.links.contact.email;
	const linkedin = props.links.linkedin;
	const github = props.links.github;
	const location = props.location;
	const phone = props.phone;
	const icon = props.icons;

	return(
		<div id="contactContainer">
			{/*<table id="container">
							<thead>
								<tr>
									<td>
										<h2>
											Contacts
										</h2>
										<img 
											className={["iconSize", "hide-mobile", "float-left"].join(' ')} // remove invert
											name={icon.name} 
											src={icon.image} 
											alt={icon.altText} 
										/>
									</td>
								</tr>
							</thead>
							<tbody>
								<tr className="links-container">
									<td>
										<table>
											<tbody>
												<tr>
													<td>
														<table>
															<tbody>
																<tr id="contact-gh">
																	<td>
																		<a href={github} target="_blank"><img className="logoSize" id="GHIcon" src={GHIcon} alt="GitHub Icon" /></a>
																		<a href={github} target="_blank" className={["link", "mobile"].join(' ')}>GitHub</a>
																	</td>
																	<td>
																		<a href={github} target="_blank" className="link" className={["link"].join(' ')}>GitHub</a>
																	</td>
																</tr>
															</tbody>
														</table>	
													</td>
												</tr>
												<tr>
													<td>
														<table>
															<tbody>
																<tr id="contact-li">
																	<td>
																		<a href={linkedin} target="_blank"><img className="logoSize" id="LIIcon" src={LIIcon} alt="LinkedIn Icon" /></a>
																	</td>
																	<td>
																		<a href={linkedin} target="_blank" className="link">LinkedIn</a>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr>
													<td>
														<table>
															<tbody>
																<tr id="contact-email">
																	<td>
																		<img className="logoSize" id="EmailIcon" src={EmailIcon} alt="Email Icon" />
																	</td>
																	<td>
																		<a href={email} className="link">Email</a>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
								<tr className="location-phone-container">
									<td>
										<table>
											<tbody>
												<tr>
													<td>
														<table>
															<tbody>
																<tr id="contact-phone">
																	<td>
																		<img className="logoSize" id="PhoneIcon" src={PhoneIcon} alt="Phone Icon" />
																	</td>
																	<td>
																		{phone} 
																	</td>
																</tr>
															</tbody>
														</table>	
													</td>
												</tr>
												<tr>
													<td>
														<table>
															<tbody>
																<tr id="contact-location">
																	<td>
																		<img className="logoSize" id="LocationIcon" src={LocationIcon} alt="Location Icon" />
																	</td>
																	<td>
																		{location} 
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>*/}
			<ul>
		        <li>
		          <a href={github} target="_blank"><img className="logoSize" id="GHIcon" src={GHIcon} alt="GitHub Icon" /></a>
		          <a href={github} target="_blank" className="link">GitHub</a>
		        </li>
		        <li>
		          <a href={github} target="_blank"><img className="logoSize" id="GHIcon" src={GHIcon} alt="GitHub Icon" /></a>
		          <a href={github} target="_blank" className="link">GitHub</a>
		        </li>
		        <li>
		          <a href={github} target="_blank"><img className="logoSize" id="GHIcon" src={GHIcon} alt="GitHub Icon" /></a>
		          <a href={github} target="_blank" className="link">GitHub</a>
		        </li>
	      </ul>
	      <ul>
		        <li>
		          <a href={linkedin} target="_blank"><img className="logoSize" id="GHIcon" src={GHIcon} alt="GitHub Icon" /></a>
		          <a href={linkedin} target="_blank" className="link">linkedin</a>
		        </li>
		        <li>
		          <a href={linkedin} target="_blank"><img className="logoSize" id="GHIcon" src={GHIcon} alt="GitHub Icon" /></a>
		          <a href={linkedin} target="_blank" className="link">linkedin</a>
		        </li>
		        <li>
		          <a href={linkedin} target="_blank"><img className="logoSize" id="GHIcon" src={GHIcon} alt="GitHub Icon" /></a>
		          <a href={linkedin} target="_blank" className="link">linkedin</a>
		        </li>
		      </ul>
		</div>
	);
};

export default Contact;





{/*<table>
							<tbody>
								<tr>
									<td colSpan="2">
										<h2>Contacts</h2>
										<img 
											className={["iconSize", "hide-mobile"].join(' ')} // remove invert
											name={icon.name} 
											src={icon.image} 
											alt={icon.altText} 
										/>
									</td>
								</tr>
							</tbody>
						</table>
						<table>
							<tbody>
								<tr className="borderStyle">
									<td><a href={github} target="_blank"><img className="logoSize" id="GHIcon" src={GHIcon} alt="GitHub Icon" /></a></td>
									<td><a href={github} target="_blank" className="link">GitHub</a></td>
								</tr>
								<tr className="borderStyle">
									<td><a href={linkedin} target="_blank"><img className="logoSize" id="LIIcon" src={LIIcon} alt="LinkedIn Icon" /></a></td> 
									<td><a href={linkedin} target="_blank" className="link">LinkedIn</a></td>
								</tr>
								<tr className="borderStyle">
									<td><img className="logoSize" id="EmailIcon" src={EmailIcon} alt="Email Icon" /></td>
									<td><a href={email} className="link">Email</a></td>
								</tr>
							</tbody>
						</table>
						<table>
							<tbody>
								<tr className="borderStyle">
									<td><img className="logoSize" id="LocationIcon" src={LocationIcon} alt="Location Icon" /></td>
									<td>{location}</td>
								</tr>
								<tr className="borderStyle">
									<td></td>
									<td>{phone}</td>
								</tr>
							</tbody>
						</table>*/}