import { ADD_MOVIES, ADD_FAV } from "../actions";
const initialMovieState = {
  list: [],
  favourites: [],
};
export default function movies(state = initialMovieState, action) {
  // if (action.type === ADD_MOVIES) {
  //   return {
  //     ...state,
  //     list: action.movies,
  //   }
  // }
  // return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

    case ADD_FAV:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };

    default:
      return state;
  }
}
