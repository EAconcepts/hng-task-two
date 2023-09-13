import React from 'react'
import MovieCard from './MovieCard'
import {Oval} from 'react-loader-spinner'

const SearchResult = ({searchResult, setSearchFocus, setSearchResult, isPending, err , searchText, setSearchText}) => {
    console.log(isPending)
  return (
    <div className="w-full">
      <>
        {
        searchResult && searchResult.length > 0 ? (
        <div className="w-full flex flex-row justify-between items-center px-2 sm:px-10 text-lg mb-8">
          <p className="text-sm sm:text-lg">
            Showing {searchResult && searchResult.length} Results for{" "}
            <span className="font-semibold">{searchText && searchText}</span>
          </p>
          <button
            className="text-xs sm:text-base text-red-600"
            onClick={() => {
                setSearchResult(null)
                setSearchText("")
                setSearchFocus(false)
            }}
          >
            Clear results
          </button>
        </div>
        )
        : searchResult && searchResult.length===0 &&
        <p className='text-center mt-2'>No result found for the search keyword</p>
    }

        <div className="sm:w-[95%] px-10 flex flex-row">
          <MovieCard movieList={searchResult} isPending={isPending} err={err} />
        </div>
      </>
    </div>
  );
}

export default SearchResult