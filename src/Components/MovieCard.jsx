import React from 'react'
import {Link} from 'react-router-dom'
import {Oval} from 'react-loader-spinner'
import imdb from "../assets/imdb.svg";
import tomato from "../assets/tomato.svg";

const MovieCard = ({movieList, err, isPending}) => {
  console.log(movieList)
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
        <div className="w-full grid grid-cols-4 gap-x-12 gap-y-20 font-dmSans">
          {movieList.map((movie) => (
            <Link to={`/movies/${movie.id}`} key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={`${movie.title} image`}
                className="w-[250px] h-[370px]"
              />
              <small className="text-[#9CA3AF] font-[700] text-[12px] leading-[15.62px]">
                USA 2018 - 2008
              </small>
              <h3 className="font-[700] text-[18px] leading-[23.44px] text-gray-900">
                Batman Begins {movie.title}
              </h3>
              <div className="w-full flex flex-row justify-between items-center text-[#111827] text-[12px] font-[400] leading-[12px]">
                <div className="flex flex-row gap-x-2 items-center">
                  <img src={imdb} alt="imdb image" className="" />
                  <span> 860 / 100</span>
                </div>
                <div className="flex flex-row gap-x-2 items-center">
                  <img src={tomato} alt="tomato image" className="" />
                  <span> 860 / 100</span>
                </div>
              </div>
              <small className="text-[#9CA3AF] text-[12px] leading-[15.62px] font-[700]">
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