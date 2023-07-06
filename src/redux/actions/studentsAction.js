import axios from 'axios';
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getStudents = createAsyncThunk(`users/register`, async (userData) => {
    try {
        const response = await axios.get('/students');
        console.log(response.data.user);
        return response.data.user;
    } catch (error) {
        console.log(error.message);
        throw new Error('get error');
    }
});
export const addStudents = createAsyncThunk(`users/register`, async (userData) => {
    try {
        const response = await axios.post('/students', userData);
        console.log(response.data.user);
        return response.data.user;
    } catch (error) {
        console.log(error.message);
        throw new Error('post error');
    }
});
