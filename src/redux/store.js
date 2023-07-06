import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import studentsReducer from './reducers /studentsReducer';

const store = configureStore({
    reducer: {
        students: studentsReducer
    },
    middleware: [thunk]
});

export default store;