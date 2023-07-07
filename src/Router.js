import {createBrowserRouter, redirect} from "react-router-dom";
import {StudentsPage} from "./Pages/StudentsPage";
import {AddStudentsPage} from "./Pages/AddStudentsPage";
import {Error404} from "./Pages/Error404";
const router = createBrowserRouter(
    [
        { path: '/', element :<StudentsPage/> , index:true },
        { path: '/students/create', element : <AddStudentsPage/>},
        {path:'*', element :<Error404/>}
    ]
);
export default router;