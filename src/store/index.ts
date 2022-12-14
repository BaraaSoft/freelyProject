import {configureStore} from '@reduxjs/toolkit';
import tripsSlice from './tripsSlice.slice';
const store = configureStore({
  reducer: {
    trips: tripsSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export default store;
