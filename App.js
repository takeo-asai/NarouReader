import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import epics from './src/epics';

import { rankingReducer } from './src/modules/ranking';
import { favoritesReducer } from './src/modules/favorites';
import Navigation from './src/navigation';

const store = createStore(
  combineReducers({
    ranking: rankingReducer,
    favorites: favoritesReducer,
  }),
  applyMiddleware(createEpicMiddleware(epics)),
);

export default () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);
