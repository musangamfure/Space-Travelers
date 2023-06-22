import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Rockets from '../rockets';

test('renders Rockets component correctly', () => {
  const rocketList = [
    {
      id: 1,
      rocket_name: 'Falcon 9',
      description: 'A two-stage rocket designed and manufactured by SpaceX.',
      image: 'falcon9.jpg',
      reserved: false,
    },
  ];

  const { container } = render(
    <Provider store={store}>
      <Rockets rocketList={rocketList} />
    </Provider>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
