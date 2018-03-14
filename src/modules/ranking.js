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
    .mergeMap(() => Ranking.fetch(new Date()))
    .map(rankings => setRanking(rankings.map(ranking => ranking.novelId)));

// https://api.syosetu.com/rank/rankget/?rtype=20130502-d&out=json
class Ranking {
  static fetch(date: Date) {
    const month = `00${date.getMonth() + 1}`.slice(-2);
    const day = `00${date.getDate()}`.slice(-2);
    const rtype = `${date.getFullYear()}${month}${day}`;
    const url = `https://api.syosetu.com/rank/rankget/?rtype=${rtype}-d&out=json`;
    return fetch(url)
      .then(response => response.json())
      .then(json => json.map(novel => new Ranking(novel.ncode, novel.pt, novel.rank)))
      .catch((error) => {
        // TODO: エラー処理
        console.log(error);
      });
  }

  novelId: string;
  pt: number;
  rank: number;
  constructor(novelId: string, pt, rank) {
    this.novelId = novelId;
    this.pt = pt;
    this.rank = rank;
  }
}
