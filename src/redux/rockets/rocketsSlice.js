import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  Rockets: [],
  isLoading: true,
};

export const fetchRockets = createAsyncThunk('rockets/', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v4/rockets');
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch rockets');
  }
});

const rocketsSlice = createSlice({
  name: 'rocketlist',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      const rocket = state.Rockets.find((rocket) => rocket.id === rocketId);
      if (rocket) {
        rocket.reserved = true;
      }
    },
    cancelRocket: (state, action) => {
      const rocketId = action.payload;
      const rocket = state.Rockets.find((rocket) => rocket.id === rocketId);
      if (rocket) {
        rocket.reserved = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Rockets = action.payload.map((rocket) => ({
          id: rocket.id,
          rocket_name: rocket.name,
          description: rocket.description,
          image: rocket.flickr_images[0],
          reserved: false,
        }));
      })
      .addCase(fetchRockets.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { reserveRocket, cancelRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
