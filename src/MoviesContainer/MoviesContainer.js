import './MoviesContainer.css';
import MovieCard from '../MovieCard/MovieCard';

function Movies({ movies }) {
  const movieCards = movies.map((movie, index) => (
    <MovieCard
      key={index}
      poster_path={movie.poster_path}
      initialVoteCount={movie.vote_count} // Pass the initial vote count as a prop
    />
  ));

  return (
    <section className='movies-container'>
      {movieCards}
    </section>
  );
}

export default Movies;