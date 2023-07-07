import { createSlice } from '@reduxjs/toolkit';
import {getStudents,addStudents} from '../actions/studentsAction'

const initialState = {
    students: null,
    totalPages:null,
    isLoading: false,
    error: null
};

const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder
            .addCase(getStudents.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getStudents.fulfilled, (state, action) => {
                state.isLoading = false;
                state.students = action.payload.records;
                state.totalPages = action.payload.totalPages;
            })
            .addCase(getStudents.rejected, (state, action) => {
                state.isLoading = false;
                state.error =  action.error.message;
            })
            .addCase(addStudents.pending, (state,action) => {
                state.isLoading = true;
                state.error = null;
            }).addCase(addStudents.fulfilled, (state,action) => {
            state.isLoading = false;
            state.students = action.payload;
        }).addCase(addStudents.rejected, (state,action) => {
            state.isLoading = false;
            state.error =  action.error.message;
        })
    }
});


export default studentsSlice.reducer;