'use client';

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Features/counter/counterSlice';
import authReducer from '@/app/GlobalRedux/Features/auth/authSlice'


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
