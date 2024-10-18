import './App.css';
import { useState} from 'react';
import homeIcon from '../icons/home.png';
import movieDetails from '../data/movie_details';
import MovieDetails from '../MovieDetails/MovieDetails'

// Example imports (for later):
// import { useState, useEffect } from 'react';
// import moviePosters from '../data/movie_posters';
// import movieDetails from '../data/movie_details';
// import MoviesContainer from '../MoviesContainer/MoviesContainer';

function App() {
  const [isHidden, setHiddenDetails] = useState("true");

  const toggleHidden = () => {
    setHiddenDetails(!isHidden)
  };

  return (
    <main className='App'>
      <header>
        <h1>Movies-Junk-n-Stuff</h1>
        <button onClick = {toggleHidden}>Detailed_movie</button>
          <img 
            src={homeIcon} 
            className={isHidden ? 'home hidden' : 'home'}
            onClick = {toggleHidden}>
          </img>
      </header>
      <MovieDetails className={isHidden ? 'hidden' : ''} movieDetails={movieDetails}/>
    </main>
  );
}

export default App;
