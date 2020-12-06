import React from 'react';
import { Formik } from 'formik';
import { Input, Button } from 'antd';

import { addNewStudent } from '../client';

const inputMarginBottom = {
	marginBottom: '1rem',
};

class AddStudentForm extends React.Component {
	render() {
		return (
			<div>
				<Formik
					initialValues={{ firstName: '', lastName: '', email: '', gender: '' }}
					validate={values => {
						const errors = {};
						if (!values.email) {
							errors.email = 'Required';
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
						) {
							errors.email = 'Invalid email address';
						}

						if (!values.firstName) {
							errors.firstName = 'First Name required';
						}

						if (!values.lastName) {
							errors.lastName = 'Last Name required';
						}

						if (!['MALE', 'FEMALE'].includes(values.gender)) {
							errors.gender = 'Gender must be (MALE, FEMALE)';
						}

						return errors;
					}}
					onSubmit={async (values, { setSubmitting }) => {
						await addNewStudent(values);
						setSubmitting(false);
						this.props.onSuccess();
					}}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
						submitForm,
						isValid,
						/* and other goodies */
					}) => (
						<form onSubmit={handleSubmit}>
							<Input
								style={inputMarginBottom}
								type='text'
								name='firstName'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.firstName}
								placeholder='First Name'
							/>
							{errors.firstName && touched.firstName && errors.firstName}
							<Input
								style={inputMarginBottom}
								type='text'
								name='lastName'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.lastName}
								placeholder='Last Name'
							/>
							{errors.lastName && touched.lastName && errors.lastName}
							<Input
								style={inputMarginBottom}
								type='email'
								name='email'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								placeholder='Email'
							/>
							{errors.email && touched.email && errors.email}
							<Input
								style={inputMarginBottom}
								type='text'
								name='gender'
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.gender}
								placeholder='Gender'
							/>
							{errors.gender && touched.gender && errors.gender}
							<Button
								onClick={() => submitForm()}
								type='submit'
								disabled={isSubmitting | (touched && !isValid)}
							>
								Submit
							</Button>
						</form>
					)}
				</Formik>
			</div>
		);
	}
}

export default AddStudentForm;
