import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  Missions: [],
  isLoading: true,
};

export const fetchMissions = createAsyncThunk('missions/getmissions', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch books');
  }
});

const missionSlice = createSlice({
  name: 'missionlist',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      const mission = state.Missions.find((mission) => mission.mission_id === missionId);
      if (mission) {
        mission.joined = true;
      }
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      const mission = state.Missions.find((mission) => mission.mission_id === missionId);
      if (mission) {
        mission.joined = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Missions = action.payload.map((missionentry) => ({
          mission_id: missionentry.mission_id,
          mission_name: missionentry.mission_name,
          description: missionentry.description,
          more_details: missionentry.wikipedia,
          joined: false,
        }));
      })
      .addCase(fetchMissions.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
