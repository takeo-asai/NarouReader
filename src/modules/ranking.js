export const REFRESH_RANKING = 'REFRESH_RANKING';

const items = ['Ranking Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can'];

const initState = {
  rankings: items,
};
export function rankingReducer(state = initState, action) {
  switch (action.type) {
    case REFRESH_RANKING:
      return state;
    default:
      return state;
  }
}
