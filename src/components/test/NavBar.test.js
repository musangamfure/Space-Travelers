import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../NavBar';

describe('NavBar', () => {
  test('renders correctly', () => {
    const { container } = render(
      <Router>
        <NavBar />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });
});
