import React from 'react'

const MovieCard = ({movieList}) => {
  console.log(movieList)
  return (
    <div className='w-full'>
      {movieList && (
        <div className="w-full grid grid-cols-4 gap-x-10 gap-y-20">
          {movieList.map((movie) => (
            <div key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt=""
                className="w-[250px] h-[370px]"
              />
              <small className="text-[#9CA3AF] font-[700] text-[12px] leading-[15.62px]">
                USA 2018 - 2008
              </small>
              <h3>Batman Begins {movie.title}</h3>
              <div className="text-[#111827] text-[12px] font-[400] leading-[12px]">
                <span> 860 / 100</span>
              </div>
              <small className="text-[#9CA3AF] text-[12px] leading-[15.62px] font-[700]">
                Action, Adventure
              </small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieCard