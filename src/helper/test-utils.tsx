import React from 'react';
import { createStore } from 'redux';
import { withRouter } from 'react-router';
import { Provider, connect } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import reducer from '../store/reducers';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
));

afterEach(cleanup);

const renderWithRedux = (
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>
          {ui}
          <LocationDisplay />
        </Router>
      </Provider>
    ),
    store,
    history
  };
};

export { renderWithRedux };
