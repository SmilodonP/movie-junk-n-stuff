import './App.css';
import { useState} from 'react';
import searchIcon from '../icons/search.png';
import movieDetails from '../data/movie_details';
import MovieDetails from '../MovieDetails/MovieDetails'

// Example imports (for later):
// import { useState, useEffect } from 'react';
// import moviePosters from '../data/movie_posters';
// import movieDetails from '../data/movie_details';
// import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {
  const [isHidden, setMovieDetails] = useState("true");

  const toggleMovieDetails = () => {
    setMovieDetails(!isHidden)
  };

  return (
    <main className='App'>
      <header>
        <h1>Movies-Junk-n-Stuff</h1>
        <button onClick = {toggleMovieDetails}>Detailed_movie</button>
      </header>
      <MovieDetails className={isHidden ? "hidden" : ""} movieDetails={movieDetails}/>
    </main>
  );
}

export default App;
