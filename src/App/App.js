import './App.css';
import React, { useState, useEffect } from 'react';
import homeIcon from '../icons/home.png';
import movieDetails from '../data/movie_details';
import MovieDetails from '../MovieDetails/MovieDetails'
import Movies from '../MoviesContainer/MoviesContainer';
import moviePosters from '../data/movie_posters';


function App() {
  const [isHidden, setHiddenDetails] = useState("true");

  const toggleHidden = () => {
    setHiddenDetails(!isHidden)
  };

  return (
    <main className='App'>
      <header>
        <h1>The RT Files</h1>
          <img 
            src={homeIcon} 
            className={isHidden ? 'home hidden' : 'home'}
            onClick = {toggleHidden}>
          </img>
      </header>
      <Movies className={isHidden ? '' : 'hidden'} movies={moviePosters} toggleHidden={toggleHidden}/>
      <MovieDetails className={isHidden ? 'hidden' : ''} movieDetails={movieDetails}/>
    </main>
  );
}

export default App;
