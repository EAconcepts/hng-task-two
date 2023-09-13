import React from 'react'
import MovieCard from './MovieCard'

const SearchResult = ({searchResult}) => {
    console.log(searchResult)
  return (
    <div className="w-[95%] px-10 flex flex-row">
      <MovieCard movieList={searchResult} />
    </div>
  );
}

export default SearchResult