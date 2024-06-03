import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import todosReducer from './todosSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
  },
});
