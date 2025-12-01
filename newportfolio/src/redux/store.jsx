import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import likeReducer from "./likeSlice";

export const store = configureStore({
  // configureStore helps combine multiple slices
  reducer: {
    counter: counterReducer,
    like: likeReducer,
  },
})
