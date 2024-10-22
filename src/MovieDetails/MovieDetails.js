import './MovieDetails.css';
import Lists from '../Lists/Lists'

function MovieDetails( { movieDetails, className }) {
    const classes = `MovieDetails ${className}`
    const extraInfo = [
      "Language: " + movieDetails.original_language + ", ",
      "Rating: " + movieDetails.popularity + ", ",
      "Release Date: " + movieDetails.release_date
    ]
  return (
    <section className={classes}>
      <section className='movie-info'>
      <img src={movieDetails.backdrop_path} alt={movieDetails.title}></img>
        <h2>{movieDetails.title}</h2>
        <Lists list_info={movieDetails.genre_ids}/>
        <p>{movieDetails.overview}</p>
        <div className= 'extra_info'>
          {extraInfo}
        </div>
      </section>
    </section>
  );
}

export default MovieDetails;
