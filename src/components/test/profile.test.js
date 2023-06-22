import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Profile from '../profile';

test('renders Profile component correctly', () => {
  const { container } = render(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
