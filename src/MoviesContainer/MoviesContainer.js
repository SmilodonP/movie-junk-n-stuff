import './MoviesContainer.css';
import MovieCard from '../MovieCard/MovieCard';

function Movies( {movies, } ) {
  const movieCards = movies.map((movie, index) => (
      <MovieCard
        key={index} 
        poster_path={movie.poster_path}
        vote_count={movie.vote_count}
      />
    ));

  return (
    <section className='movies-container'>
      {movieCards}
    </section>
  )
}
  
export default Movies;


// function getMovies(){
//   fetch('./data/movie_posters.js')
//     .then(response => response.json()
//     .then(fetchedMovies => setMovies([...Movies, ...fetchedMovies]))
//     .catch(error => {
//       console.log(error.message)
//       setError(error.message)
// }