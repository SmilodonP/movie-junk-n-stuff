import './MovieDetails.css';
import Lists from '../Lists/Lists'
import { useLocation } from 'react-router-dom'

function MovieDetails() { 
  const location = useLocation();
  const { movieDetails } = location.state || {};
  
  const extraInfo = [
    "Language: " + movieDetails.original_language + ", ",
    "Rating: " + movieDetails.popularity + ", ",
    "Release Date: " + movieDetails.release_date
  ]

  return (
    <section className='MovieDetails'>
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
