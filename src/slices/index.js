import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice.js';

export default configureStore({
  reducer: {
    // counter – имя внутри объекта состояния state.counter
    counter: counterReducer,
  },
});