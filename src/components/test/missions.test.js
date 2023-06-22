import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Missions from '../missions';

test('renders Missions component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
  expect(container.firstChild).toMatchSnapshot();
});

test('renders Missions component with mission list correctly', () => {
  const missionList = [
    {
      mission_id: 1,
      mission_name: 'Mission 1',
      description: 'Mission 1 Description',
      joined: false,
    },
    {
      mission_id: 2,
      mission_name: 'Mission 2',
      description: 'Mission 2 Description',
      joined: true,
    },
  ];

  const { container } = render(
    <Provider store={store}>
      <Missions missionList={missionList} />
    </Provider>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
