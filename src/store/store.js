import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice'
import loginReducer from './userSlice'


const store = configureStore({
    reducer: {
        user: loginReducer,
        
    },
});

export default store;