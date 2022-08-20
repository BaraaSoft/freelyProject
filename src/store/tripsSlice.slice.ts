import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

import type {PayloadAction} from '@reduxjs/toolkit';

export interface Trip {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  status: 'NOT_STARTED' | 'STARTED' | 'FINISHED';
  destinations: string[];
}

export interface TripsState {
  data: Trip[];
  loading: boolean;
  isError: boolean;
}

const initialState = {data: [], loading: false, isError: false} as TripsState;

const delay = (sec: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done');
    }, sec);
  });
};

export const getAllTrips = createAsyncThunk(
  'trips/getAllTrips',
  async (id, thunkAPI) => {
    try {
      await delay(3000);
      const resp = await require('../../__data__/trip-list.json');
      console.log('response trips:', resp);
      return resp;
    } catch (error) {
      if (error instanceof Error) console.log(error);
      return thunkAPI.rejectWithValue('Error loading trips data');
    }
  },
);

const TripsSlice = createSlice({
  name: 'Trips',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllTrips.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAllTrips.fulfilled, (state, action) => {
      state.loading = false;
      state.data.push(...action.payload);
    });
    builder.addCase(getAllTrips.rejected, (state, action) => {
      state.loading = false;
      state.isError = true;
      console.log('Error Loading trips data');
    });
  },
});

// export const {} = TripsSlice.actions;
export default TripsSlice.reducer;
