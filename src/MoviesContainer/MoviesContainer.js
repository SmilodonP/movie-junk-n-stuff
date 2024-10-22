import './MoviesContainer.css';
import MovieCard from '../MovieCard/MovieCard';

function Movies({ movies, className, updateMovies, getDetails }) {
  const classes = `movies-container ${className}`
  const movieCards = movies.map((movie, index) => (
    <MovieCard
      key={index}
      id ={movie.id}
      poster_path={movie.poster_path}
      initialVoteCount={movie.vote_count}
      updateMovies={updateMovies}
      getDetails={getDetails} // Pass the initial vote count as a prop
    />
  ));

  return (
    <section className={classes}>
      {movieCards}
    </section>
  );
}

export default Movies;