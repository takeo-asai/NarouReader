import 'rxjs';

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

const items = ['Ranking Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can'];

const initState = {
  rankings: items,
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
    .mergeMap(() =>
      // TODO: 実装する
      new Promise((resolve) => {
        setTimeout(() => resolve(), 3000);
      }))
    .map(() => setRanking(items.concat('abc')));
