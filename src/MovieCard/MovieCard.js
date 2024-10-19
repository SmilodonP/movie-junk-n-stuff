import './MovieCard.css';

const MovieCard = ({poster_path, vote_count}) => {
  return (
    <section className='movie-card'>
      <img src={poster_path} alt="Missing Poster!!!!"/>
      <div id='votes'>{vote_count}</div>
    </section>
  );
}

export default MovieCard;