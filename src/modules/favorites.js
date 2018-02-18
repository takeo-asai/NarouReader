export const ADD_FAVORITE = 'ADD_FAVORITE';

export function favoritesReducer(state = [], action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return state;
    default:
      return state;
  }
}
