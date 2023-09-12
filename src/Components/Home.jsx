import React, { useState } from 'react'
import tv from '../assets/tv.svg'
import {Link} from 'react-router-dom'

const Home = () => {
    const [searchText, setSearchText] = useState("")
    const OnSearchChange =(event)=>{
        setSearchText(event.target.value)
    }
    const onSearchSubmit=()=>{
        event.preventDefault()
    }
  return (
    <div className="relative w-full font-dmSans border-">
      <div className=" w-full h-[600px] border flex flex-col">
        <nav className="w-full h-[80px] items-center flex flex-row justify-between ">
          <Link to='/' className="w-[186px] flex flex-row items-center  ml-[95px] gap-x-[24px]">
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
              width="16px"
              height="16px"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 13L9 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.599976 1.40001C0.599976 0.73727 1.13723 0.200012 1.79998 0.200012H16.2C16.8627 0.200012 17.4 0.73727 17.4 1.40001C17.4 2.06275 16.8627 2.60001 16.2 2.60001H1.79998C1.13723 2.60001 0.599976 2.06275 0.599976 1.40001Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.599976 8.60001C0.599976 7.93727 1.13723 7.40001 1.79998 7.40001H16.2C16.8627 7.40001 17.4 7.93727 17.4 8.60001C17.4 9.26275 16.8627 9.80001 16.2 9.80001H1.79998C1.13723 9.80001 0.599976 9.26275 0.599976 8.60001Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </nav>
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
                fill-rule="evenodd"
                clip-rule="evenodd"
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
      <section className="w-fulll mt-[70px] ml-[34px] flex flex-col px-[98px]">
        <div className="w-full  flex flex-row justify-between">
          <h2 className="font-700 text-[36px] text-black leading-[46.87px]">
            Feautred Movie
          </h2>
          <button className="text-rose-700 text-[18px] leading-[24px] font-[400]">
            See more &gt;{" "}
          </button>
        </div>
        <div className="flex flex-col gap-[12px]">
          <image src="" alt="" className="w-[250px] h-[370px]" />
          <small className="text-[#9CA3AF] font-[700] text-[12px] leading-[15.62px]">
            USA 2018 - 2008
          </small>
          <h3>Batman Begins</h3>
          <div
            className="text-[
#111827] text-[12px] font-[400] leading-[12px]"
          >
            <span> 860 / 100</span>
          </div>
          <small className="text-[#9CA3AF] text-[12px] leading-[15.62px] font-[700]">
            Action, Adventure
          </small>
        </div>
      </section>
    </div>
  );
}

export default Home