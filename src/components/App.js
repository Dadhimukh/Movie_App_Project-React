import { data } from "../data";
import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

class App extends React.Component {
  // make call api
  // dispatch function
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(()=>{
      console.log("UPDATED");
      this.forceUpdate();
    })

    // store.dispatch({
    //   type: "ADD_MOVIES",
    //   movies: data,
    // });
    store.dispatch(addMovies(data))

          console.log("STATE", this.props.store.getState());

  }


  isMovieFavourite = (movie)=>{
    const {favourites} = this.props.store.getState()

    const index = favourites.indexOf(movie);
    if(index !== -1){
      // found the movie
      return true
    }
    return false
  }
  render() {
    const { list } = this.props.store.getState();

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {list.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movie-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

// function App(props) {

//   const movie = props.store.getState();
//   return (
//     <div className="App">
//       <Navbar />
//       <div className="main">
//         <div className="tabs">
//           <div className="tab">Movies</div>
//           <div className="tab">Favourites</div>
//         </div>

//         <div className="list">
//           {movie.map((movie, index) => {
//             return <MovieCard movie={movie} key={`movie-${index}`} />;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
