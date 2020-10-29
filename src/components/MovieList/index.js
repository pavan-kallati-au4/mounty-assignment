import React from 'react';
import './MovieList.css';
import sample from '../../assets/sample.png'

export const MovieList = ({ poster_path, vote_average, original_title, view, id }) => {
  return (
    <div className='movie-cards'>
      {poster_path ? <img className='movie-img' src={`https://image.tmdb.org/t/p/w1280/${poster_path}`} alt='poster'></img>
        : <img className='movie-img' src={sample} alt='sample'></img>}
      <p className='movie-rating'>{Math.round(vote_average * 10)}%</p>
      <h6 className='movie-title'>{original_title}</h6>
      <div className="middle">
        <div className="text" onClick={() => view(id)}>View more</div>
      </div>
    </div>
  )
}
