import React, { useState } from 'react';
import './MovieCard.css';
import UpvoteIcon from '../icons/upvote.png';
import DownvoteIcon from '../icons/downvote.png';

const MovieCard = ({ poster_path, initialVoteCount }) => {
  const [voteCount, setVoteCount] = useState(initialVoteCount);

  const handleUpVote = () => {
    setVoteCount(voteCount + 1);
  };

  const handleDownVote = () => {
    setVoteCount(voteCount - 1);
  };

  return (
    <section className='movie-card'>
      <img src={poster_path} alt="Missing Poster!!!!" />
      <div id='votes'>
        <button onClick={handleUpVote}>
          <img src={UpvoteIcon} alt="Upvote" />
        </button>
        <span className='vote-count'> 
            {voteCount}
        </span>
        <button onClick={handleDownVote}>
          <img src={DownvoteIcon} alt="Downvote" />
        </button>
      </div>
    </section>
  );
}

export default MovieCard;
