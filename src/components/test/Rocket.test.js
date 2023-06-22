import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Rocket from '../rocket';
import { reserveRocket, cancelRocket } from '../../redux/rockets/rocketsSlice';

jest.mock('../../redux/store');

const rocketData = {
  id: 1,
  name: 'Rocket 1',
  description: 'Rocket 1 Description',
  image: 'rocket1.jpg',
  reserved: false,
};

test('renders rocket details correctly when not reserved', () => {
  render(
    <Provider store={store}>
      <Rocket
        id={rocketData.id}
        name={rocketData.name}
        description={rocketData.description}
        image={rocketData.image}
        reserved={rocketData.reserved}
      />
    </Provider>,
  );

  expect(screen.getByAltText('rocket')).toHaveAttribute('src', 'rocket1.jpg');
  expect(screen.getByText('Rocket 1')).toBeInTheDocument();
  expect(screen.getByText('Rocket 1 Description')).toBeInTheDocument();
  expect(screen.getByText('Reserve Rocket')).toBeInTheDocument();
  expect(screen.queryByText('Cancel Reservation')).not.toBeInTheDocument();
});

test('dispatches reserveRocket when Reserve Rocket button is clicked', () => {
  render(
    <Provider store={store}>
      <Rocket
        id={rocketData.id}
        name={rocketData.name}
        description={rocketData.description}
        image={rocketData.image}
        reserved={rocketData.reserved}
      />
    </Provider>,
  );

  fireEvent.click(screen.getByText('Reserve Rocket'));

  expect(store.dispatch).toHaveBeenCalledWith(reserveRocket(1));
});

test('dispatches cancelRocket when Cancel Reservation button is clicked', () => {
  const reservedRocketData = { ...rocketData, reserved: true };
  render(
    <Provider store={store}>
      <Rocket
        id={reservedRocketData.id}
        name={reservedRocketData.name}
        description={reservedRocketData.description}
        image={reservedRocketData.image}
        reserved={reservedRocketData.reserved}
      />
    </Provider>,
  );

  fireEvent.click(screen.getByText('Cancel Reservation'));

  expect(store.dispatch).toHaveBeenCalledWith(cancelRocket(1));
});
