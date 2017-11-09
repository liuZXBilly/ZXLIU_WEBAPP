import React from 'react';
import './header.css'

function Header (props) {
	return (
		<div>
			<div className='navigator'>
				<ul id='navigator_menu'>
					<li className='navigator-item'>
						<a className='navigator-button' href='http://www.google.com'>
							About Me
						</a>
					</li>
					<li className='navigator-item'>
						<a className='navigator-button' href='http://www.google.com'>
							Articles
						</a>		
					</li>
					<li className='navigator-item'>
						<a className='navigator-button' href='http://www.google.com'>
							Work Item
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Header