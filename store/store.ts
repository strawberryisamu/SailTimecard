import {configureStore} from '@reduxjs/toolkit';
import { timeReducer } from './slice/userSlice';

export const store = configureStore({
  reducer: {
    time: timeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;