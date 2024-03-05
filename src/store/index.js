import { configureStore } from '@reduxjs/toolkit';
import {authReducer,changeEmail,changePassword,isLogin} from './slices/authSlice';



const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export { store, changeEmail, changePassword,isLogin};
