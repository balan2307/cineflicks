import React from 'react'
import MovieItem from '../components/MovieItem';

function Trending() {
  return (
    <div className='flex gap-2 flex-wrap justify-around'>
        <MovieItem></MovieItem>
        <MovieItem></MovieItem>
        <MovieItem></MovieItem>
        <MovieItem></MovieItem>
        <MovieItem></MovieItem>
      
    </div>
  )
}

export default Trending;
