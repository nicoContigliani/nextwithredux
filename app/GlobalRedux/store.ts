'use client';

// import { configureStore } from '@reduxjs/toolkit';
 import counterReducer from './Features/counter/counterSlice';
// import authReducer from '@/app/GlobalRedux/Features/auth/authSlice'


// export const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//         auth: authReducer
//     }
// })

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from '../GlobalRedux/Features/auth/authSlice'



export const store = configureStore({
  reducer: {
    //   user: userReducer,
    auth: authReducer,
    counter: counterReducer,
    //   company:companyReducer,
    //   insurance:insuranceReducer,
  },

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
