import {StudentsTable} from "../Compoents/StudentsTable";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getStudents} from "../redux/actions/studentsAction"
import axiosInstance from "../api/axiosInstance";

export const StudentsPage = () => {

	const exportExecl = async () => {
		const res =  axiosInstance.get("students/generateExcel",{
			responseType: 'blob'
		})
		 .then(response => {
			const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
			const link = document.createElement('a');
			link.href = downloadUrl;
			link.setAttribute('download', 'students.xlsx');
			document.body.appendChild(link);
			link.click();
		})
			.catch(error => {

			});
	}
	return (
		<>
			<Container>
				<Row>
					<Button variant="primary" className="my-4 " onClick={exportExecl}> Export as Excl </Button>
				</Row>
				<Row>
					<Col>
						<StudentsTable/>
					</Col>
				</Row>
			</Container>

		</>
	)
}