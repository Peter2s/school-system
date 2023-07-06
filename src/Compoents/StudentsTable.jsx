import {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getStudents} from '../redux/actions/studentsAction'

import {Table} from "react-bootstrap";

export const StudentsTable = () => {
	const dispatch = useDispatch();
	const students = useSelector(state => state.students);
	useEffect(() => {
		dispatch( getStudents() );
	}, [dispatch]);
	return (
				<Table striped bordered hover>
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
				</Table>
	)
}
