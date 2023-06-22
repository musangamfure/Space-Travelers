import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionSlice';

function Mission({
  id, name, description, joined,
}) {
  const dispatch = useDispatch();

  const handleJoinMission = (e) => {
    e.preventDefault();
    dispatch(joinMission(id));
  };

  const handleLeaveMission = (e) => {
    e.preventDefault();
    dispatch(leaveMission(id));
  };

  return (
    <tr key={id}>
      <td><b>{name}</b></td>
      <td>{description}</td>
      {!joined && (
        <>
          <td><button type="button" className="btn-width">NOT A MEMBER</button></td>
          <td><button type="submit" onClick={handleJoinMission} className="btn-join">JOIN MISSION</button></td>
        </>
      )}
      {joined && (
        <>
          <td><button type="button" className="btn-width-joined">ACTIVE MEMBER</button></td>
          <td><button type="submit" onClick={handleLeaveMission} className="btn-leave">LEAVE MISSION</button></td>
        </>
      )}
    </tr>
  );
}

Mission.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};

export default Mission;
