import { TabNavigator } from 'react-navigation';

import RankingScreen from './screens/rankingScreen';
import FavoritesScreen from './screens/favoritesScreen';
import HistoryScreen from './screens/historyScreen';

export default TabNavigator({
  Ranking: { screen: RankingScreen },
  Favorites: { screen: FavoritesScreen },
  History: { screen: HistoryScreen },
});
