import './MovieCard.css';
import UpvoteIcon from '../icons/upvote.png';
import DownvoteIcon from '../icons/downvote.png';

const MovieCard = ({ id, poster_path, initialVoteCount, updateMovies, getDetails }) => {
  return (
    <section className='movie-card'>
        <img src={poster_path} alt="Movie Poster!!!!" className='movieImage' onClick={() => getDetails(id)} />
      <div id='votes'>
        <button onClick={() => updateMovies(id, 'up')} className='upvote'>
          <img src={UpvoteIcon} alt="Upvote" />
        </button>
        <span className='vote-count'> 
          {initialVoteCount}
        </span>
        <button onClick={() => updateMovies(id, 'down')} className='downvote'>
          <img src={DownvoteIcon} alt="Downvote" />
        </button>
      </div>
    </section>
  );
}

export default MovieCard;
