import React, { useState } from 'react';
import {Form, Button, Container, Row, Col, FormControl} from 'react-bootstrap';
import { Formik, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {forEach} from "react-bootstrap/ElementChildren";

const AddStudentForm = () => {
	const validationSchema = Yup.object().shape({
		students: Yup.array().of(
			Yup.object().shape({
				firstName: Yup.string().required('First Name is required').min(2, 'First Name must be at least 2 characters'),
				lastName: Yup.string().required('Last Name is required').min(2, 'Last Name must be at least 2 characters'),
				notes: Yup.string().required('Notes is required').min(2, 'Notes must be at least 2 characters'),
				image: Yup.mixed().required('Image is required')
			})
		)
	});

		const handleSubmit = (values) => {
			const formData = new FormData();

			values.students?.forEach((student, index) => {
				formData.set(`students[${index}].firstName`, student.firstName);
				formData.set(`students[${index}].lastName`, student.lastName);
				formData.set(`students[${index}].notes`, student.notes);
				formData.set(`students[${index}].image`, student.image);
			});
			console.log(formData);
		};

		return (
				<Formik initialValues={{ students: [{ firstName: '', lastName: '', notes: '', image: '' }] }} validationSchema={validationSchema} onSubmit={handleSubmit}>
					{({ handleSubmit, isSubmitting,values }) => (
						<Form onSubmit={handleSubmit}>
							<Container>
							<FieldArray name="students">
								{({ push, remove }) => (
									<div>
										<h3>Add Students</h3>

										{values.students.map((_, index) => (
											<div key={index} className="border border-2 mt-2 p-3">
												<Row>
													<Col xs="6">
												<Form.Group controlId={`students.${index}.firstName`}>
													<Form.Label>First Name</Form.Label>
													<Field name={`students.${index}.firstName`} type="text" as={Form.Control} />
													<ErrorMessage name={`students.${index}.firstName`} component="div" className="text-danger" />
												</Form.Group>

												<Form.Group controlId={`students.${index}.lastName`}>
													<Form.Label>Last Name</Form.Label>
													<Field name={`students.${index}.lastName`} type="text" as={Form.Control} />
													<ErrorMessage name={`students.${index}.lastName`} component="div" className="text-danger" />
												</Form.Group>
													</Col>
													<Col xs="5">
												<Form.Group controlId={`students.${index}.notes`}>
													<Form.Label>Notes</Form.Label>
													<Field name={`students.${index}.notes`} type="text" as={Form.Control} />
													<ErrorMessage name={`students.${index}.notes`} component="div" className="text-danger" />
												</Form.Group>

												<Form.Group controlId={`students.${index}.image`}>
													<Form.Label>Image</Form.Label>
													<Field name={`students.${index}.image`}>
														{({ field, form }) => (
																// <FormControl
																// 	type="file"
																// 	{...field}
																// 	onChange={(event) => form.setFieldValue(`students.${index}.image`, event.currentTarget.files[0])}
																// />
															<Field name={`students.${index}.image`} type="file" as={Form.Control} />

														)}
													</Field>
													<ErrorMessage name={`students.${index}.image`} component="div" className="text-danger" />
												</Form.Group>
														</Col>
													<Col xs="1">
															{index > 0 && (
																<Button variant="danger" onClick={() => remove(index)} className="mb-3">
																	<FontAwesomeIcon icon={faTrash} />
																</Button>
															)}
														</Col>
												</Row>
											</div>
										))}

										<Button variant="primary" onClick={() => push({ firstName: '', lastName: '', notes: '', image: null })} className="my-3">
											<FontAwesomeIcon icon={faPlus} /> Add Student
										</Button>
									</div>
								)}
							</FieldArray>

							<Button variant="primary" type="submit" >
								Submit
							</Button>
							</Container>
						</Form>
					)}
				</Formik>
		);
	};
export  default  AddStudentForm

