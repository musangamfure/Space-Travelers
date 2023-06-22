import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Mission from '../Mission';

const mockStore = configureStore([]);

describe('Mission component', () => {
  test('renders correctly when not joined', () => {
    const store = mockStore({});
    const mission = {
      id: 1,
      name: 'Mission 1',
      description: 'Mission 1 Description',
      joined: false,
    };

    const { getByText } = render(
      <Provider store={store}>
        <table>
          <tbody>
            <Mission
              id={mission.id}
              name={mission.name}
              description={mission.description}
              joined={mission.joined}
            />
          </tbody>
        </table>
      </Provider>,
    );

    expect(getByText('Mission 1')).toBeInTheDocument();
    expect(getByText('Mission 1 Description')).toBeInTheDocument();
    expect(getByText('JOIN MISSION')).toBeInTheDocument();
  });

  test('renders correctly when joined', () => {
    const store = mockStore({});
    const mission = {
      id: 2,
      name: 'Mission 2',
      description: 'Mission 2 Description',
      joined: true,
    };

    const { getByText } = render(
      <Provider store={store}>
        <table>
          <tbody>
            <Mission
              id={mission.id}
              name={mission.name}
              description={mission.description}
              joined={mission.joined}
            />
          </tbody>
        </table>
      </Provider>,
    );

    expect(getByText('Mission 2')).toBeInTheDocument();
    expect(getByText('Mission 2 Description')).toBeInTheDocument();
    expect(getByText('LEAVE MISSION')).toBeInTheDocument();
  });

  test('dispatches joinMission when Join Mission button is clicked', () => {
    const store = mockStore({});
    const mission = {
      id: 3,
      name: 'Mission 3',
      description: 'Mission 3 Description',
      joined: false,
    };

    const { getByText } = render(
      <Provider store={store}>
        <table>
          <tbody>
            <Mission
              id={mission.id}
              name={mission.name}
              description={mission.description}
              joined={mission.joined}
            />
          </tbody>
        </table>
      </Provider>,
    );

    const joinButton = getByText('JOIN MISSION');
    fireEvent.click(joinButton);

    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0].type).toEqual('missionlist/joinMission');
    expect(actions[0].payload).toEqual(3);
  });

  test('dispatches leaveMission when Leave Mission button is clicked', () => {
    const store = mockStore({});
    const mission = {
      id: 4,
      name: 'Mission 4',
      description: 'Mission 4 Description',
      joined: true,
    };

    const { getByText } = render(
      <Provider store={store}>
        <table>
          <tbody>
            <Mission
              id={mission.id}
              name={mission.name}
              description={mission.description}
              joined={mission.joined}
            />
          </tbody>
        </table>
      </Provider>,
    );

    const leaveButton = getByText('LEAVE MISSION');
    fireEvent.click(leaveButton);

    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0].type).toEqual('missionlist/leaveMission');
    expect(actions[0].payload).toEqual(4);
  });
});
