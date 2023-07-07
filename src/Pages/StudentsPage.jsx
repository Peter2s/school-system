import {StudentsTable} from "../Compoents/StudentsTable";
import {Button, Col, Container, Row, Spinner} from "react-bootstrap";
import {useState} from "react";
import axiosInstance from "../api/axiosInstance";
import Swal from "sweetalert2";
import {Link} from "react-router-dom";
export const StudentsPage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const exportExecl = async () => {
		setIsLoading(true);
		axiosInstance.get("students/generateExcel",{
			responseType: 'blob'
		})
		 .then(response => {
			 downloading(response);
			 setIsLoading(false);
		})
			.catch(error => {
				setIsLoading(false);
				Swal.fire({
					position: 'top-end',
					icon: 'error',
					title: 'Oops! Something went wrong',
					text: error.message,
					showConfirmButton: false,
					timer: 3000
				})
			});
	}
	const downloading = (response) => {
		const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
		const link = document.createElement('a');
		link.href = downloadUrl;
		link.setAttribute('download', 'students.xlsx');
		document.body.appendChild(link);
		link.click();
	}
	return (
		<>
			<Container>
			<div className="d-flex justify-content-start">
				<Button className="btn btn-primary mt-5">
					<Link to="/students/create" className="text-light "  style={{textDecoration:'none',cursor:'pointer'}} >Add new Students </Link>
				</Button>
			</div>
			{!isLoading ?
				<>
				<Row>
					<Button variant="primary" className="my-4 " onClick={exportExecl}> Export as excel sheet </Button>
				</Row>
				<Row>
					<Col>
						<StudentsTable/>
					</Col>
				</Row>
				</>: <Spinner className="my-4" />}
			</Container>
		</>
	)
}