import './MovieDetails.css';

function MovieDetails( { movieDetails, className }) {
    const classes = `MovieDetails ${className}`
  
  
  return (
    <section className={classes}>
      <p>Movie Details go here!</p>
      <img src={movieDetails.backdrop_path} alt={movieDetails.title}></img>
    </section>
  );
}

export default MovieDetails;
