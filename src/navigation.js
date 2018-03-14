import React from 'react';

import { TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import RankingScreen from './screens/rankingScreen';
import FavoritesScreen from './screens/favoritesScreen';
import HistoryScreen from './screens/historyScreen';

const getIconName = (name) => {
  switch (name) {
    case 'Ranking':
      return 'trophy';
    case 'Favorites':
      return 'star';
    case 'History':
      return 'clock';
    default:
      return '';
  }
};

export default TabNavigator(
  {
    Ranking: { screen: RankingScreen },
    Favorites: { screen: FavoritesScreen },
    History: { screen: HistoryScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: (tab) => {
        const { routeName } = navigation.state;
        const iconName = getIconName(routeName);
        return <Icon family="FontAwesome" name={iconName} style={{ color: tab.tintColor }} />;
      },
    }),
  },
);
