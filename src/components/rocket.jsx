import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelRocket } from '../redux/rockets/rocketsSlice';

function Rocket({
  id, name, description, image, reserved,
}) {
  const dispatch = useDispatch();

  const handleReserveRocket = () => {
    dispatch(reserveRocket(id));
  };

  const handleCancelRocket = () => {
    dispatch(cancelRocket(id));
  };

  return (
    <div key={id} className="rocket">
      <img alt="rocket" className="rocket-image" src={image} />
      <div className="rocket-details">
        <h2>{name}</h2>
        <p>
          {reserved && <span className="reserved-span">Reserved </span>}
          {description}
        </p>
        {!reserved && (
          <button
            type="button"
            onClick={handleReserveRocket}
            className="rocket-button"
          >
            Reserve Rocket
          </button>
        )}
        {reserved && (
          <button
            type="button"
            onClick={handleCancelRocket}
            className="rocket-button-cancel"
          >
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
}

Rocket.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
