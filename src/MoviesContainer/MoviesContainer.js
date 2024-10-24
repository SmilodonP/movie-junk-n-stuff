import './MoviesContainer.css';
import MovieCard from '../MovieCard/MovieCard';

function Movies({ movies, updateMovies, getDetails }) {
  const movieCards = movies.map((movie, index) => (
    <MovieCard
      key={index}
      id ={movie.id}
      poster_path={movie.poster_path}
      initialVoteCount={movie.vote_count}
      updateMovies={updateMovies}
      getDetails={getDetails} 
    />
  ));

  return (
    <section className='movies-container'>
      {movieCards}
    </section>
  );
}

export default Movies;