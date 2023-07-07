import {Link} from "react-router-dom";
export const Error404 = () => {
	return (
		<>
			<h1>Error404</h1>
			<h3>sorry this page not found</h3>
			<Link to="/students" className="text-light my-3 d-inline-block rounded-2 fs-4 bg-secondary p-3"  style={{textDecoration:'none',cursor:'pointer'}} >Go to Student page</Link>
		</>
	)
}