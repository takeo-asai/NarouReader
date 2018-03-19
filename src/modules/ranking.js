import 'rxjs';
import Novel from './novel';

export const REFRESH_RANKING = 'REFRESH_RANKING';
const FETCH_RANKING = 'FETCH_RANKING';
const SET_RANKING = 'SET_RANKING';

export const refreshRanking = () => ({
  type: REFRESH_RANKING,
  payload: {},
});

export const fetchRanking = () => ({
  type: FETCH_RANKING,
  payload: {},
});

const setRanking = rankings => ({
  type: SET_RANKING,
  payload: {
    rankings,
  },
});

const initState = {
  rankings: [],
  isRefreshing: false,
};
export function rankingReducer(state = initState, action) {
  switch (action.type) {
    case REFRESH_RANKING:
      return { ...state, isRefreshing: true };
    case SET_RANKING:
      return { ...state, isRefreshing: false, rankings: action.payload.rankings };
    default:
      return state;
  }
}

export const fetchRankingEpic = action$ =>
  action$
    .ofType(FETCH_RANKING)
    .mergeMap(() => Novel.fetch(new Date()))
    .do((novels) => {
      console.log(novels);
    })
    .map(novels => setRanking(novels));
