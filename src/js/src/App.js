import React from 'react';
import { Table, Avatar, Modal } from 'antd';

import { fetchStudents } from './client';
import Container from './Container';
import Footer from './Footer';
import AddStudentForm from './forms/AddStudentForm';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			students: [],
			isAddStudentModalOpen: false,
		};
	}

	openAddStudentModal = () =>
		this.setState({ ...this.state, isAddStudentModalOpen: true });

	closeAddStudentModal = () =>
		this.setState({ ...this.state, isAddStudentModalOpen: false });

	async getStudents() {
		const students = await fetchStudents();
		if (students.error) {
			alert(JSON.stringify(students.error, null, 2));
			return;
		}
		this.setState({ ...this.state, students });
	}

	componentDidMount() {
		this.getStudents();
	}

	render() {
		const { students, isAddStudentModalOpen } = this.state;

		const columns = [
			{
				title: '',
				key: 'avatar',
				render: (text, student) => (
					<Avatar size='large'>
						{`${student.firstName
							.charAt(0)
							.toUpperCase()}${student.lastName.charAt(0).toUpperCase()}`}
					</Avatar>
				),
			},
			{
				title: 'Student Id',
				dataIndex: 'studentId',
				key: 'studentId',
			},
			{
				title: 'First Name',
				dataIndex: 'firstName',
				key: 'firstName',
			},
			{
				title: 'Last Name',
				dataIndex: 'lastName',
				key: 'lastName',
			},
			{
				title: 'Email',
				dataIndex: 'email',
				key: 'email',
			},
			{
				title: 'Gender',
				dataIndex: 'gender',
				key: 'gender',
			},
		];

		return (
			<Container>
				<Table
					dataSource={students}
					columns={columns}
					rowKey='studentId'
					pagination={false}
				/>
				<Modal
					title='Add new student'
					visible={isAddStudentModalOpen}
					onOk={this.closeAddStudentModal}
					onCancel={this.closeAddStudentModal}
					width={1000}
				>
					<h1>Hello Modal from antd</h1>
					<AddStudentForm
						onSuccess={() => {
							this.closeAddStudentModal();
							this.getStudents();
						}}
					/>
				</Modal>
				<div style={{ height: '50px' }}></div>
				<Footer
					numberOfStudents={students.length}
					handleAddStudentClickEvent={this.openAddStudentModal}
				/>
			</Container>
		);
	}
}

export default App;
