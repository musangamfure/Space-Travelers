import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';
import '../styles/mission.css';

function Missions() {
  const missionList = useSelector((state) => state.missions.Missions);

  return (
    <>
      <table className="container">
        <thead>
          <tr>
            <th><b>Mission</b></th>
            <th><b>Description</b></th>
            <th><b>Status</b></th>
            <th> </th>
          </tr>
        </thead>
        {missionList.map((mission) => (
          <tbody key={mission.mission_id} className="mission">
            <Mission
              key={mission.mission_id}
              id={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
              joined={mission.joined}
            />
          </tbody>
        ))}
      </table>
    </>
  );
}

export default Missions;
