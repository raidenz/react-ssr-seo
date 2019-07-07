import React from 'react';
import { createStore, Store } from 'redux';
import { withRouter } from 'react-router';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import reducer from '../store/reducers';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
));

afterEach(cleanup);

interface RenderOptions {
  initialState?: any;
  store?: Store<any>;
  route?: any;
  history?: any;
}

const defaultState = {};

const renderWithRedux = (
  ui: React.ReactElement<any>,
  {
    initialState = defaultState,
    store = createStore(reducer, initialState),
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: RenderOptions = {},
) => {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>
          {ui}
          <LocationDisplay />
        </Router>
      </Provider>,
    ),
    store,
    history,
  };
};

export { renderWithRedux };
