import './MovieDetails.css';

function MovieDetails( { movieDetails, className }) {
    const classes = `MovieDetails ${className}`
  
  
  return (
    <section className={classes}>
      <p>Movie Details go here!</p>
    </section>
  );
}

export default MovieDetails;