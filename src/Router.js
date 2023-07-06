import {createBrowserRouter, redirect} from "react-router-dom";
import {StudentsPage} from "./Pages/StudentsPage";
import {AddStudentsPage} from "./Pages/AddStudentsPage";
const router = createBrowserRouter(
    [
        { path: '/', element :<StudentsPage/> , index:true },
        { path: '/students/create', element : <AddStudentsPage/>}
    ]
);
export default router;