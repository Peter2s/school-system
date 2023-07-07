import React from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import { Formik, FieldArray } from 'formik';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {addStudents} from '../../redux/actions/studentsAction'
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {AddStundetOneForm} from "./AddStundetOneForm";
import validations from './validations'
const AddStudentForm = () => {
	const dispatch= useDispatch()
	const navigation = useNavigate();
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
			navigation("/")
		};
		return (
				<Formik initialValues={{ students: [{ firstName: '', lastName: '', Note: '', ImageFile: File }] }} validationSchema={validations} onSubmit={handleSubmit}>
					{({ handleSubmit, isSubmitting,values }) => (
						<Form onSubmit={handleSubmit}>
							<Container>
							<FieldArray name="students">
								{({ push, remove }) => (
									<div>
										{values.students.map((_, index) => (
											<AddStundetOneForm index={index} remove={remove} values={values}/>
										))}
										<Button variant="primary" onClick={() => push({ firstName: '', lastName: '', Note: '', ImageFile: File })} className="my-3">
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

