import axiosInstance from '../../api/axiosInstance';
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getStudents = createAsyncThunk(`students/get`, async (userData) => {
    try {
        const response = await axiosInstance.get('/students');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error.message);
        throw new Error('get error');
    }
});
export const addStudents = createAsyncThunk(`students/create`, async (studentDtos) => {
    try {
        const response = await axiosInstance.post('/students', studentDtos);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error.message);
        throw new Error('post error');
    }
});
