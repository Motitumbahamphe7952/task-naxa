import { configureStore } from '@reduxjs/toolkit';
import langReducer from './langslice';

export const store = configureStore({
  reducer: {
    language: langReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
