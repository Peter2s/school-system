import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Formik, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddStudentForm = () => {
	const initialValues = {
		students: [
			{
				firstName: '',
				lastName: '',
				photo: null,
				note: ''
			}
		]
	};

	const validationSchema = Yup.object({
		students: Yup.array().of(
			Yup.object().shape({
				firstName: Yup.string().required('First Name is required'),
				lastName: Yup.string().required('Last Name is required'),
				photo: Yup.mixed().required('Photo is required'),
				note: Yup.string().required('Note is required')
			})
		)
	});

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			// Send a POST request to the backend API to add the students
			await axios.post('/api/students', values.students); // Replace with your API endpoint

			// Reset the form after successful submission
			resetForm();
		} catch (error) {
			console.error('Error adding students:', error);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
			{({ isSubmitting , values }) => (
				<Form>
					<FieldArray name="students">
						{({ push, remove }) => (
							<div>
								{values.students.map((student, index) => (
									<div key={index}>
										<Form.Group controlId={`students[${index}].firstName`}>
											<Form.Label>First Name</Form.Label>
											<Field name={`students[${index}].firstName`} as={Form.Control} />
											<ErrorMessage name={`students[${index}].firstName`} component="div" className="text-danger" />
										</Form.Group>

										<Form.Group controlId={`students[${index}].lastName`}>
											<Form.Label>Last Name</Form.Label>
											<Field name={`students[${index}].lastName`} as={Form.Control} />
											<ErrorMessage name={`students[${index}].lastName`} component="div" className="text-danger" />
										</Form.Group>

										<Form.Group controlId={`students[${index}].photo`}>
											<Form.Label>Student Photo</Form.Label>
											<Field name={`students[${index}].lastName`} type='file' as={Form.Control} />
											{/*<Field name={`students[${index}].photo`}>*/}
											{/*	{({ field, form }) => (*/}
											{/*			<Form.File*/}
											{/*				{...field}*/}
											{/*				onChange={(event) => form.setFieldValue(`students[${index}].photo`, event.currentTarget.files[0])}*/}
											{/*				isInvalid={form.errors.students && form.errors.students[index] && form.errors.students[index].photo}*/}
											{/*			/>*/}
											{/*	)}*/}
											{/*</Field>*/}
											<ErrorMessage name={`students[${index}].photo`} component="div" className="text-danger" />
										</Form.Group>

										<Form.Group controlId={`students[${index}].note`}>
											<Form.Label>Note</Form.Label>
											<Field name={`students[${index}].note`} as={Form.Control} />
											<ErrorMessage name={`students[${index}].note`} component="div" className="text-danger" />
										</Form.Group>

										<Button variant="danger" onClick={() => remove(index)} className="mb-3">
											Remove Student
										</Button>
									</div>
								))}

								<Button variant="primary" onClick={() => push(initialValues.students[0])}  className="mb-3">
									Add Student
									</Button>
									</div>
									)}
							</FieldArray>

							<Button variant="primary" type="submit" disabled={isSubmitting}>
						Add Students
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default AddStudentForm;
