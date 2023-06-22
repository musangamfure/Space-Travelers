import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRockets } from './redux/rockets/rocketsSlice';
import { fetchMissions } from './redux/missions/missionSlice';
import NavBar from './components/NavBar';
import Rockets from './components/rockets';
import Missions from './components/missions';
import Profile from './components/profile';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
