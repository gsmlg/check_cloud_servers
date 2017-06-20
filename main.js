import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './app/reducers/index';
import initialState from './app/init_state';
import App from './app/index';

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk)
);

export default () => (
  <Provider store={store}>
    <App store={store} />
  </Provider>
);
