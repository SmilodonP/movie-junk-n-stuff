import React, { useState } from 'react';
import './MovieCard.css';
import moviePosters from '../data/movie_posters';
import UpvoteIcon from '../icons/upvote.png';
import DownvoteIcon from '../icons/downvote.png';

const MovieCard = ({ id, poster_path, initialVoteCount, updateMovies, getDetails }) => {
  return (
    <section className='movie-card'>
      <img src={poster_path} alt="Missing Poster!!!!" onClick={() => getDetails(id)} />
      <div id='votes'>
        <button onClick={() => updateMovies(id, 'up')}>
          <img src={UpvoteIcon} alt="Upvote" />
        </button>
        <span className='vote-count'> 
          {initialVoteCount}
        </span>
        <button onClick={() => updateMovies(id, 'down')}>
          <img src={DownvoteIcon} alt="Downvote" />
        </button>
      </div>
    </section>
  );
}

export default MovieCard;
