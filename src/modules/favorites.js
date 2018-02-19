export const ADD_FAVORITE = 'ADD_FAVORITE';

const items = ['Favorites Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can'];

const initState = {
  favorites: items,
};
export function favoritesReducer(state = initState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return state;
    default:
      return state;
  }
}
