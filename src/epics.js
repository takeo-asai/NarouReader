import { combineEpics } from 'redux-observable';

import { fetchRankingEpic } from './modules/ranking';

export default combineEpics(fetchRankingEpic);
