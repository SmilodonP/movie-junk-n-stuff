import './App.css';
import React, { useState, useEffect } from 'react';
import homeIcon from '../icons/home.png';
// import movieDetails from '../data/movie_details';
import MovieDetails from '../MovieDetails/MovieDetails'
import Movies from '../MoviesContainer/MoviesContainer';
import moviePosters from '../data/movie_posters';


function App() {
  const [isHidden, setHiddenDetails] = useState("true");
  const [movies, setMovies] = useState([]);

  const toggleHidden = () => {
    setHiddenDetails(!isHidden)
  };

  const updateMovies = (id, vote) => {
    const updateMovies = movies.map((movie) => {
      if (movie.id === id) {
        return { ...movie, vote_count: (movie.vote_count + vote) }
      }
      return movie;
    })
    setMovies(updateMovies)
  };

  const movieData = () => {
    fetch('https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies')
      .then(response => response.json())
      .then(data => setMovies([...movies, ...data]))
      .catch(error => console.log("We messed up!"))
  }
  useEffect(() =>{
    movieData();
  }, [])

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
      <Movies className={isHidden ? '' : 'hidden'} movies={movies} toggleHidden={toggleHidden} updateMovies={updateMovies}/>
      {movieDetails && <MovieDetails className={isHidden ? 'hidden' : ''} movieDetails={movieDetails}/>}
    </main>
  );
}

export default App;
