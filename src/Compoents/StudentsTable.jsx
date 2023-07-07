import {useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getStudents} from '../redux/actions/studentsAction'
import {Spinner, Table} from "react-bootstrap";
import Pagination from "@mui/material/Pagination";


export const StudentsTable = ({data}) => {
	const [page, setPage] = useState(1);

	const dispatch = useDispatch();
	const students = useSelector(state => state.students.students);
	const totalPages = useSelector(state => state.students.totalPages);
	useEffect(() => {
		dispatch( getStudents(1) );
	}, []);
	useEffect(() => {
		console.log(students)
	}, [students]);

	useEffect(() => { dispatch(getStudents(page)) }
		,[page])
	const onPageChange = (event, value) => {
		setPage(value);
	};
	return (
				students ? <Table striped bordered hover>
					<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Student Photo</th>
						<th>Note</th>
					</tr>
					</thead>
					<tbody>
					{students.map((student) => (
						<tr key={student.id}>
							<td>{student.firstName}</td>
							<td>{student.lastName}</td>
							<td>
								<img src={student.photo} alt="Student" width="100" height="100" />
							</td>
							<td>{student.note}</td>
						</tr>
					))}
					</tbody>
					<Pagination
						count={totalPages}
						color="primary"
						size="large"
						page={page}
						onChange={onPageChange}
					/>
				</Table> : <Spinner className="m-4" size="xl" />
	)
}
