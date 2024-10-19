import './MoviesContainer.css';
import MovieCard from '../MovieCard/MovieCard';

function Movies({ movies, className, toggleHidden }) {
  const classes = `movies-container ${className}`
  const movieCards = movies.map((movie, index) => (
    <MovieCard
      key={index}
      poster_path={movie.poster_path}
      initialVoteCount={movie.vote_count}
      toggleHidden={toggleHidden} // Pass the initial vote count as a prop
    />
  ));

  return (
    <section className={classes}>
      {movieCards}
    </section>
  );
}

export default Movies;