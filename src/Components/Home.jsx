import React, { useEffect, useState } from "react";
import tv from "../assets/tv.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import SearchResult from "./SearchResult";
import MovieCard from "./MovieCard";
import { Oval } from "react-loader-spinner";
import imdb from "../assets/imdb.svg";
import tomato from "../assets/tomato.svg";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [searchFocus, setSearchFocus] = useState(false)
  const [topRated, setTopRated] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [heroErr, setHeroErr] = useState(null);
  const [err, setErr] = useState(null);
  const [searchErr, setSearchErr] = useState(null);
  const [heroMovie, setHeroMovie] = useState(null);
  const notify = (text) => toast(text);
  const navigateTo= useNavigate()
  const OnSearchChange = (event) => {
    setSearchText(event.target.value);
  };
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjhmZGEwZDU1ZDFlOTNhMTVjYjRjZDIyZWFhOWM1NCIsInN1YiI6IjY1MDA0ZDExNmEyMjI3MDEzNzJkNDUxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5q4ZTXc0TgxFeia4Zz3pMw9QBubvWGdeQHV3qeHfySE";
  const headers = {
    Authorization: `Bearer ${token}`,
    "content-type": "application/json",
  };
  const onSearchSubmit = () => {
    event.preventDefault();
    setIsPending(true);
    console.log(searchText);
    if (searchText.length > 0) {
      axios
        .get(`https://api.themoviedb.org/3/search/movie?query=${searchText}`, {
          headers,
        })
        .then((response) => {
          if (response.status === 200) {
            console.log(response);
            setSearchResult(response.data.results);
            setIsPending(false);
          }
        })
        .catch((error) => {
          console.log(error);
          setSearchErr(`${error.message}!`)
          setIsPending(false);
        });
    }
  };
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/search/movie?query=john%20wick%203", {
        headers,
      })
      .then((response) => {
        console.log(response);
        setHeroMovie(response.data.results);
      })
      .catch((error) => {
        setHeroErr(`${error.message}!`)
        console.log(error);
      });
  }, []);
  useEffect(() => {
    setIsPending(true)
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        { headers }
      )
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          setTopRated(response.data.results.slice(0, 10));
        } 
        setIsPending(false)
      })
      .catch((error) =>{ console.log(error)
        // let text = `${error.message}!`;
        setErr(`${error.message}!`)
        // notify(text);
        setIsPending(false)
    });
  }, []);
  console.log(searchResult);

  let imgUrl = `https://image.tmdb.org/t/p/original${
    heroMovie && heroMovie[0].backdrop_path
  }`;
  console.log(imgUrl);
  return (
    <div className="relative w-full font-dmSans ">
      <ToastContainer />
      <div
        className=" w-full h-[600px] flex flex-col bg-no-repeat bg-cover bg-transparent"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url('${imgUrl}')`,
        }}
      >
        <nav className="relative w-full h-[80px] items-center flex flex-row justify-between ">
          <button
            onClick={() => {
              setSearchFocus(false);
              navigateTo("/");
            }}
            className="w-[186px] flex flex-row items-center  ml-[95px] gap-x-[24px]"
          >
            <img className="h-[50px] " src={tv} alt={`${tv} svg`} />
            <span className="text-[24px] leading[24px] font-dmSans font-[700] text-white">
              MovieBox
            </span>
          </button>
          <form
            onSubmit={onSearchSubmit}
            className="w-[525px] h-[36px] px-[6px] py-[10px] flex flex-row justify-between items-center border-[2px] rounded-[6px] "
          >
            <input
              type="search"
              value={searchText}
              onChange={OnSearchChange}
              onFocus={() => setSearchFocus(true)}
              placeholder="what do you want to watch?"
              className="w-full text-[16px] leading-[24px] bg-transparent placeholder:text-white text-white focus-within:outline-none"
            />
            <svg
              onClick={onSearchSubmit}
              width="16px"
              height="16px"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 13L9 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </form>
          <div className="flex flex-row items-center gap-x-[27px] mr-[95px] text-white">
            <button>Sign in</button>
            <button className="flex flex-row rounded-full bg-rose-700 h-[36px] w-[36px] justify-center items-center">
              <svg
                width="18"
                height="10"
                viewBox="0 0 18 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.599976 1.40001C0.599976 0.73727 1.13723 0.200012 1.79998 0.200012H16.2C16.8627 0.200012 17.4 0.73727 17.4 1.40001C17.4 2.06275 16.8627 2.60001 16.2 2.60001H1.79998C1.13723 2.60001 0.599976 2.06275 0.599976 1.40001Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.599976 8.60001C0.599976 7.93727 1.13723 7.40001 1.79998 7.40001H16.2C16.8627 7.40001 17.4 7.93727 17.4 8.60001C17.4 9.26275 16.8627 9.80001 16.2 9.80001H1.79998C1.13723 9.80001 0.599976 9.26275 0.599976 8.60001Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </nav>

        {searchFocus && (
          <div className="z-30 w-full absolute top-40 bottom-0 bg-white flex flex-col items-center">
            <SearchResult
              searchResult={searchResult}
              isPending={isPending}
              err={searchErr} searchText={searchText}
            />
          </div>
        )}

        {heroMovie ? (
          <div
            className={`absolute w-[404px] ml-[95px] top-[158px] flex flex-col `}
          >
            <h1 className="text-white text-[48px] font-dmSans font-[700] leading-[56px]">
              {" "}
              {heroMovie && heroMovie[0].title}{" "}
            </h1>
            <div className="flex flex-row gap-x-5 my-2 text[10px] text-white">
              <div className="flex flex-row gap-x-1">
                <img src={imdb} alt="imdb image" className="" />
                <span>860/100</span>
              </div>
              <div className=" flex flex-row gap-x-1">
                <img src={tomato} alt="tomato image" className="" />
                <span>97</span>
              </div>
            </div>
            <p className="w-[302px] font-500 text-[14px] leading-[18px] text-white">
              {heroMovie && heroMovie[0].overview}
            </p>
            <button className=" mt-3 w-[169px] flex flex-row items-center gap-x-[8px] bg-rose-700 rounded-[6px] px-[16px] py-[6px]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7.5547 5.16795C7.24784 4.96338 6.8533 4.94431 6.52814 5.11833C6.20298 5.29235 6 5.63121 6 6V10C6 10.3688 6.20298 10.7077 6.52814 10.8817C6.8533 11.0557 7.24784 11.0366 7.5547 10.8321L10.5547 8.83205C10.8329 8.64659 11 8.33435 11 8C11 7.66565 10.8329 7.35342 10.5547 7.16795L7.5547 5.16795Z"
                  fill="white"
                />
              </svg>
              <span className="text-[14px] leading-[24px] font-[700] uppercase text-white">
                WATCH TRAILER
              </span>
            </button>
          </div>
        ) : !isPending &&(
          <p className="w-full text-center text-red-400 text-lg mt-20">
            {heroErr && heroErr} Please
            <button
              className="pl-1 underline"
              onClick={() => window.location.reload()}
            >
              {" "}
              try again
            </button>
          </p>
        )}
      </div>
      <section className="w-full mt-[70px] flex flex-col px-[98px]">
        <div className="w-full  flex flex-row justify-between mb-8">
          <h2 className="font-[700] text-[36px] text-black leading-[46.87px]">
            Featured Movie
          </h2>
          <button className="text-rose-700 text-[18px] leading-[24px] font-[400]">
            See more &gt;{" "}
          </button>
        </div>
        <MovieCard movieList={topRated} err={err} isPending={isPending} />
      </section>
    </div>
  );
};

export default Home;
