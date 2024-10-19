import './App.css';
// import searchIcon from '../icons/search.png';
import { useState, useEffect } from 'react';
import Movies from '../MoviesContainer/MoviesContainer';
import moviePosters from '../data/movie_posters';
import movieDetails from '../data/movie_details';

function App() {
  return (
    <main className='App'>
      <header>
        <h1>MOOvies</h1>
      </header>
      <Movies movies={moviePosters}/>
    </main>
  );
}

export default App;
