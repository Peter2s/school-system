import {Button, Col, Form, FormControl, Row} from "react-bootstrap";
import {ErrorMessage, Field} from "formik";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const AddStundetOneForm = ({remove,index,values}) => {
	return (
		<>
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
										 onChange={e=> values.students[index].ImageFile = e.target.files[0]}
							/>
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
			</div></>
	)
}