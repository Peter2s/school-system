import React from 'react';
import {Form, Button, Container, Row, Col, FormControl} from 'react-bootstrap';
import { Formik, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import {addStudents} from '../redux/actions/studentsAction'
import {useDispatch} from "react-redux";

const AddStudentForm = () => {
	const dispatch= useDispatch()
	const validationSchema = Yup.object().shape({
		students: Yup.array().of(
			Yup.object().shape({
				firstName: Yup.string().required('First Name is required').min(2, 'First Name must be at least 2 characters'),
				lastName: Yup.string().required('Last Name is required').min(2, 'Last Name must be at least 2 characters'),
				Note: Yup.string().required('Notes is required').min(2, 'Notes must be at least 2 characters'),
				ImageFile: Yup.mixed().required('Image is required')
			})
		)
	});

		const handleSubmit = (values) => {
			console.log(values.students)
			const formData = new FormData();
			values.students.forEach((student,index) =>{
				formData.append(`studentDtos[${index}].firstName`, student.firstName);
				formData.append(`studentDtos[${index}].lastName`, student.lastName);
				formData.append(`studentDtos[${index}].Note`, student.Note);
				formData.append(`studentDtos[${index}].ImageFile`, student.ImageFile);
			})
			console.log(formData);
			dispatch(addStudents(formData));
		};

		return (
				<Formik initialValues={{ students: [{ firstName: '', lastName: '', Note: '', ImageFile: File }] }} validationSchema={validationSchema} onSubmit={handleSubmit}>
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
												<Form.Group controlId={`students.${index}.Note`}>
													<Form.Label>Note</Form.Label>
													<Field name={`students.${index}.Note`} type="text" as={Form.Control} />
													<ErrorMessage name={`students.${index}.Note`} component="div" className="text-danger" />
												</Form.Group>

												<Form.Group controlId={`students.${index}.ImageFile`}>
													<Form.Label>Image</Form.Label>
													<FormControl name={`students.${index}.ImageFile`} type="file"
														   onChange={e=> values.students[0].ImageFile = e.target.files[0]}
													/>
													{/*<Field name={`students.${index}.ImageFile`}>*/}
													{/*	*/}
													{/*	{({ field, form }) => (*/}
													{/*			// <FormControl*/}
													{/*			// 	type="file"*/}
													{/*			// 	{...field}*/}
													{/*			// 	onChange={(event) => form.setFieldValue(`students.${index}.image`, event.currentTarget.files[0])}*/}
													{/*			// />*/}
													{/*		<Field name={`students.${index}.ImageFile`} type="file" as={Form.Control} />*/}

													{/*	)}*/}
													{/*</Field>*/}
													<ErrorMessage name={`students.${index}.ImageFile`} component="div" className="text-danger" />
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

