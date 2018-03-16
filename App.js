import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import firebase from 'react-native-firebase';

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

// firebase.messaging().requestPermissions();
console.log('loading');
firebase
  .messaging()
  .getToken()
  .then((token) => {
    console.log('fcm token', token);
  });
firebase.messaging().onMessage((message) => {
  console.log('onMessage ', message);
});
firebase
  .messaging()
  .getInitialNotification()
  .then((notification) => {
    console.log('notification, ', notification);
  });
firebase.fabric.crashlytics().log('Notify something');

export default () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);
