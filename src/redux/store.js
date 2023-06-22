import { configureStore } from '@reduxjs/toolkit';
import missionSlice from './missions/missionSlice';
import rocketsSlice from './rockets/rocketsSlice';

export const store = configureStore({
  reducer: {
    missions: missionSlice,
    rockets: rocketsSlice,
  },
});

export default store;
