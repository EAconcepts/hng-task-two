import React, { useEffect, useState } from "react";
import tv from "../assets/tv.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import SearchResult from "./SearchResult";
import MovieCard from "./MovieCard";
import { Oval } from "react-loader-spinner";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [topRated, setTopRated] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const notify = (text) => toast(text);
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
          setIsPending(false);
        });
    }
  };

  //   useEffect(() => {
  //
  //     axios
  //       .get(
  //         "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  //         { headers }
  //       )
  //       .then((response) => {
  //             if(response.status===200){
  //         console.log(response);
  //         setTopRated(response.data.results.slice(0, 10));
  //       }
  //             else {
  //                 notify("Error fetching top rated movies")
  //             }
  //         })
  //       .catch((error) => console.log(error));
  //   }, []);
  console.log(searchResult);

  return (
    <div className="relative w-full font-dmSans border-">
      <div className=" w-full h-[600px] border flex flex-col">
        <nav className="w-full h-[80px] items-center flex flex-row justify-between ">
          <Link
            to="/"
            className="w-[186px] flex flex-row items-center  ml-[95px] gap-x-[24px]"
          >
            <img className="h-[50px] " src={tv} alt={`${tv} svg`} />
            <span className="text-[24px] leading[24px] font-dmSans font-[700] text-whit">
              MovieBox
            </span>
          </Link>
          <form
            onSubmit={onSearchSubmit}
            className="w-[525px] h-[36px] px-[6px] py-[10px] flex flex-row justify-between items-center border-[2px] rounded-[6px] bg-slate-400 "
          >
            <input
              type="search"
              value={searchText}
              onChange={OnSearchChange}
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
          <div className="flex flex-row items-center gap-x-[27px] mr-[95px]">
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
        {isPending && (
          <div className="z-30 absolute top-40 bottom-0 w-full bg-white flex flex-col items-center">
            <Oval
              ariaLabel="loading-indicator"
              height={150}
              width={150}
              strokeWidth={5}
              strokeWidthSecondary={1.5}
              color="blue"
              secondaryColor="white"
            />
          </div>
        )}
        { searchResult && searchResult.length > 0 ? (
          <div className="z-30 absolute top-40 bg-white flex flex-col items-center">
            <div className="w-full flex flex-row justify-between items-center px-10 text-lg mb-8">
              <p className=" text-lg">
                Showing {searchResult.length} Results for{" "}
                <span className="font-semibold">{searchText}</span>
              </p>
              <button
                className="text-red-600"
                onClick={() => setSearchResult(null)}
              >
                Clear results
              </button>
            </div>
            <SearchResult searchResult={searchResult} />
          </div>
        ) : searchResult && searchResult.length===0 && (
          <div className="z-30 absolute top-40 bottom-0 w-full bg-white flex flex-col items-center">
            <p className="font-semibold text-lg">
              No result found for {searchText}
            </p>
          </div>
        )}
        <div className="absolute w-[404px] ml-[95px] top-[158px] flex flex-col">
          <h1>John Wick 3: Parabellum</h1>
          <p className="text[10px]">
            {" "}
            <span>860/100</span> <span>97</span>
          </p>
          <p className="w-[302px] font-500 text-[14px] leading-[18px] text-whit">
            John Wick is on the run after killing a member of the internation
            assassins; guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere
          </p>
          <button className="w-[169px] flex flex-row items-center gap-x-[8px] bg-rose-700 rounded-[6px] px-[16px] py-[6px]">
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
      </div>
      <section className="w-full mt-[70px] flex flex-col px-[98px]">
        <div className="w-full  flex flex-row justify-between">
          <h2 className="font-700 text-[36px] text-black leading-[46.87px]">
            Feautred Movie
          </h2>
          <button className="text-rose-700 text-[18px] leading-[24px] font-[400]">
            See more &gt;{" "}
          </button>
        </div>
        <MovieCard movieList={topRated} />
      </section>
    </div>
  );
};

export default Home;
