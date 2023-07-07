import axiosInstance from '../../api/axiosInstance';
import {createAsyncThunk} from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const getStudents = createAsyncThunk(`students/get`, async (page) => {
    try {
        const response = await axiosInstance.get(`/students?page=${page || 1}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
});
export const addStudents = createAsyncThunk(`students/create`, async (studentDtos) => {
    try {
        const response = await axiosInstance.post('/students', studentDtos);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Oops! Something went wrong',
            text: error.message,
            showConfirmButton: false,
            timer: 3000
        })
        throw new Error(error.message);
    }
});
