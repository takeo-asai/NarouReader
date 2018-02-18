import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { rankingReducer } from './src/modules/ranking';
import { favoritesReducer } from './src/modules/favorites';
import Navigation from './src/navigation';

const store = createStore(combineReducers({
  ranking: rankingReducer,
  favorites: favoritesReducer,
}));

export default () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);
