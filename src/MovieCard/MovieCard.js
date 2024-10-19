import React, { useState } from 'react';
import './MovieCard.css';
import moviePosters from '../data/movie_posters';
import UpvoteIcon from '../icons/upvote.png';
import DownvoteIcon from '../icons/downvote.png';

const MovieCard = ({ id, poster_path, initialVoteCount, toggleHidden }) => {
  const [voteCount, setVoteCount] = useState(initialVoteCount);

  const updateData = (id, newVoteCount) => {
    const updatedMovies = moviePosters.map((movie) => {
      if (movie.id === id) {
        return { ...movie, vote_count: newVoteCount };
      }
      return movie;
    });

    console.log('Updated Mock Database:', updatedMovies);
  };

  const handleUpVote = () => {
    const newVoteCount = voteCount + 1;
    setVoteCount(newVoteCount);
    updateData(id, newVoteCount);
  };

  const handleDownVote = () => {
    const newVoteCount = voteCount - 1;
    setVoteCount(newVoteCount);
    updateData(id, newVoteCount);
  };

  return (
    <section className='movie-card'>
      <img src={poster_path} alt="Missing Poster!!!!" onClick={() => toggleHidden()} />
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
