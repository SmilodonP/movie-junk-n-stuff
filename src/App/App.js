import './App.css';
import React, {useEffect, useState} from 'react';
import logo from './assets/RT_logo.png';
import MovieDetails from '../MovieDetails/MovieDetails'
import Movies from '../MoviesContainer/MoviesContainer';



function App() {
  const [isHidden, setHiddenDetails] = useState("true");
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState(null);

  const toggleHidden = () => {
    setHiddenDetails(!isHidden)
  };

  const updateMovies = (id, vote) => {
    fetch(`https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({'vote_direction': vote}),
      headers: {'Content-Type': 'application/json'}
    })
      .then(response => response.json())
      .then(updatedMovie => {
        const updatedMovies = movies.map(movie =>
          movie.id === updatedMovie.id ? updatedMovie : movie
      );
        setMovies([...updatedMovies]);
      })
      .catch(error => console.log('We messed up so much!'))
  };

  const movieData = () => {
    fetch('https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies')
      .then(response => response.json())
      .then(data => setMovies([...movies, ...data]))
      .catch(error => console.log('We messed up!'))
  };

  const getDetails = (id) => {
    fetch(`https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${id}`)
      .then(response => response.json())
      .then(data => setMovieDetails(data))
      .catch(error => console.log('We messed up less!'));
    toggleHidden();
  }

  const homeClear = () => {
    setMovieDetails(null);
    toggleHidden();
  };

  useEffect(() =>{
    movieData();
  }, [])

  return (
    <main className='App'>
      <header>
        <section className={isHidden ?'logo': 'hidden'}>
          <img src={logo} alt="logo"/> 
        </section> 
        <button 
          className={isHidden ? 'homeButton home hidden' : 'homeButton home'}
          onClick={homeClear}
        />
        <section className='titles'>
          <h1>The RT Files</h1>
          <h3>Movies Exist</h3>
        </section>
        <section className={isHidden ?'logo': 'hidden'}>
          <img src={logo} alt="logo"/> 
        </section>
        <button 
          className={isHidden ? 'homeButton home hidden' : 'homeButton home'}
          onClick={homeClear}
        />
      </header>
      <Movies className={isHidden ? '' : 'hidden'} movies={movies} getDetails={getDetails} updateMovies={updateMovies}/>
      {movieDetails && <MovieDetails className={isHidden ? 'hidden' : ''} movieDetails={movieDetails}/>}
    </main>
  );
}

export default App;
