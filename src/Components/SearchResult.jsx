import React from 'react'
import MovieCard from './MovieCard'
import {Oval} from 'react-loader-spinner'

const SearchResult = ({searchResult, isPending, err , searchText}) => {
    console.log(isPending)
  return (
    <div className="w-full">
      <>
        {
        searchResult && searchResult.length > 0 && (
        <div className="w-full flex flex-row justify-between items-center px-2 sm:px-10 text-lg mb-8">
          <p className="text-sm sm:text-lg">
            Showing {searchResult && searchResult.length} Results for{" "}
            <span className="font-semibold">{searchText && searchText}</span>
          </p>
          <button
            className="text-xs sm:text-base text-red-600"
            onClick={() => setSearchResult(null)}
          >
            Clear results
          </button>
        </div>
        )}

        <div className="sm:w-[95%] px-10 flex flex-row">
          <MovieCard movieList={searchResult} isPending={isPending} err={err} />
        </div>
      </>
      {/* )} */}
      {/* searchResult && searchResult.length === 0 && (
      <div className="z-30 absolute top-40 bottom-0 w-full bg-white flex flex-col items-center">
        <p className="font-semibold text-lg">
          No result found for {searchText}
        </p>
      </div>
      ) )} */}
    </div>
  );
}

export default SearchResult