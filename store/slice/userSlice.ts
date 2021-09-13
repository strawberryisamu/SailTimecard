import {createSlice} from '@reduxjs/toolkit';

export type UserState = {
  name: string;
  date: number;
  onwork: number;
  offwork: number;
  worktime: number;
}

const initialState: UserState = {
  name: '',
  date: 0,
  onwork: 0,
  offwork: 0,
  worktime: 0,
}

export const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    onwork: (state, action) => {
      state.name = action.payload.name;
      state.date = action.payload.date;
      state.onwork = action.payload.onwork;
    },
    offwork: (state, action) => {
      state.name = action.payload.name;
      state.date = action.payload.date;
      state.offwork = action.payload.offwork;
    },
    setworktime: (state, action) => {
      state.name = action.payload.name;
      state.date = action.payload.date;
      state.worktime = action.payload.console.worktime;
      
    }
  }
})

export const timeReducer = timeSlice.reducer;
