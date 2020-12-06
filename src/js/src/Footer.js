import React from 'react';
import { Button, Avatar } from 'antd';
import './Footer.css';

import Container from './Container';

const Footer = props => (
	<div className='footer'>
		<Container>
			<div className='button-container'>
				{props.numberOfStudents && (
					<Avatar className='avatar' size='large'>
						{props.numberOfStudents}
					</Avatar>
				)}
				<Button
					type='primary'
					onClick={() => props.handleAddStudentClickEvent()}
				>
					Add Student
				</Button>
			</div>
		</Container>
	</div>
);

export default Footer;
