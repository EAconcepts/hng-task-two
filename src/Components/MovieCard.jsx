import React from 'react'
import {Link} from 'react-router-dom'
import {Oval} from 'react-loader-spinner'
import imdb from "../assets/imdb.svg";
import tomato from "../assets/tomato.svg";

const MovieCard = ({movieList, err, isPending}) => {
  // console.log(movieList)
  return (
    <div className="w-full">
      {isPending && (
        <div className=" mt-7 w-full flex flex-row justify-center">
          <Oval
            ariaLabel="loading-indicator"
            height={80}
            width={80}
            strokeWidth={5}
            strokeWidthSecondary={1.5}
            color="blue"
            secondaryColor="white"
          />
        </div>
      )}
      {movieList ? (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 place-items-center lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-12 gap-y-10 sm:gap-y-20 font-dmSans">
          {movieList.map((movie) => (
            <Link
              to={`/movies/${movie.id}`}
              key={movie.id}
              data-testid="movie-card"
              className=' w-[250px]  flex flex-col '
            >
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={`${movie.title} image`}
                className="bg-cover w-[250px] h-[310px] sm:h-[370px]"
                data-testid="movie-poster"
              />
              <small className="mt-1 text-[#9CA3AF] font-[700] text-[12px] leading-[15.62px]">
                USA{" "}
                <span className="" data-testid="movie-release-date">
                  {movie.release_date.substring(0, 4)}
                </span>
              </small>
              <h3
                className="font-[700] text-sm sm:text-[18px] leading-[23.44px] text-gray-900"
                data-testid="movie-title"
              >
                 {movie.title}
              </h3>
              <div className="w-full flex flex-row justify-between items-center text-[#111827] text-xs sm:text-[12px] font-[400] leading-[12px]">
                <div className="flex flex-row gap-x-2 items-center">
                  <img src={imdb} alt="imdb image" className="" />
                  <span> 860 / 100</span>
                </div>
                <div className="flex flex-row gap-x-2 items-center">
                  <img src={tomato} alt="tomato image" className="" />
                  <span> 860 / 100</span>
                </div>
              </div>
              <small className="mt-1 text-[#9CA3AF] text-xs sm:text-[12px] leading-[15.62px] font-[700]">
                Action, Adventure
              </small>
            </Link>
          ))}
        </div>
      ) : (
        !isPending &&
        err && (
          <p className="text-lg font-semibold text-center mt-10 text-red-600">
            {err} Cannot fetch Movie details, please
            <button
              className="pl-1 underline"
              onClick={() => window.location.reload()}
            >
              {" "}
              try again
            </button>
          </p>
        )
      )}
    </div>
  );
}

export default MovieCard