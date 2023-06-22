import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/rocket.css';
import Rocket from './rocket';

function Rockets() {
  const rocketList = useSelector((state) => state.rockets.Rockets);
  return (
    <div className="rocket-container">
      {rocketList.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.rocket_name}
          description={rocket.description}
          image={rocket.image}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
}

export default Rockets;
