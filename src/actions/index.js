// {
// type: "ADD_MOVIES";
// }
// {
// type: "DECREASE_COUNT";
// }

// action type
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAV = "ADD_FAV";

// action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
export function addFavourite(movie) {
  return {
    type: ADD_FAV,
    movie,
  };
}
