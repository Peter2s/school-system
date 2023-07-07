import AddStudentForm from "../Compoents/AddStudentForm/AddStudentForm";
import React from "react";
import {Link} from "react-router-dom";
import {Button, Container} from "react-bootstrap";
export const AddStudentsPage = () => {
	return (
		<>
			<Container>
				<div className="d-flex justify-content-between align-items-center my-2">
					<h3 className="h3 d-inline-block">Add Students</h3>
					<Button className="btn btn-primary">
						<Link to="/" className="text-light "  style={{textDecoration:'none',cursor:'pointer'}} >Show All Students </Link>
					</Button>
				</div>
				<AddStudentForm/>
			</Container>
		</>
	)
}