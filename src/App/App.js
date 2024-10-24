import './App.css';
import React, {useEffect, useState} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { HomeHeader, DetailsHeader} from '../Headers/Headers'
import MovieDetails from '../MovieDetails/MovieDetails'
import Movies from '../MoviesContainer/MoviesContainer';
import Error from '../Error/Error';

function App() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

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
      .catch(error => navigate(`*`, { state: { error: error}}));
  };

  const movieData = () => {
    fetch('https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies')
      .then(response => response.json())
      .then(data => setMovies([...movies, ...data]))
      .catch(error => navigate(`*`, { state: { error: error}}));
  };

  const getDetails = (id) => {
    fetch(`https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${id}`)
      .then(response => response.json())
      .then(data => navigate(`/${id}`, { state: { movieDetails: data}}))
      .catch(error => navigate(`*`, { state: { error: error}}));

  }

  useEffect(() =>{
    movieData();
  }, [])

  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<>
              <HomeHeader /> 
              <Movies movies={movies} getDetails={getDetails} updateMovies={updateMovies}/>
            </>
          }/>
        <Route path='/:id' element={<>
            <DetailsHeader />
            <MovieDetails />
          </>
        }/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </main>
  );
}

export default App;
