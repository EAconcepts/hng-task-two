import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import star from '../assets/star.svg'
import {Oval} from 'react-loader-spinner'

import SideMenu from "./SideMenu";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null)
  const [duration, setDuration] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [err, setErr] = useState(null)
 const token =
   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjhmZGEwZDU1ZDFlOTNhMTVjYjRjZDIyZWFhOWM1NCIsInN1YiI6IjY1MDA0ZDExNmEyMjI3MDEzNzJkNDUxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5q4ZTXc0TgxFeia4Zz3pMw9QBubvWGdeQHV3qeHfySE";
 const headers = {
   Authorization: `Bearer ${token}`,
   "content-type": "application/json",
 };


useEffect(()=>{
    setIsPending(true)
    axios.get(`https://api.themoviedb.org/3/movie/${id}`, {headers})
    .then((response)=>{
        if(response.status===200){
        console.log(response)
        setMovieDetail(response.data)
        setDuration(convertDuration(response.data.runtime))
        setIsPending(false)
    }
    })
    .catch((error)=>{
        console.log(error)
        setErr(error.message)
        setIsPending(false)
    })
},[])
const convertDuration=(totalMinutes)=>{
    let hour = Math.floor(totalMinutes / 60)
    let minutes = totalMinutes % 60 
    let time = `${hour}h ${minutes}m` 
    return time
}
// console.log(duration)
  return (
    <div className="relative w-full flex flex-row gap-x-12 font-dmSans">
      <div className="w-[226px]">
        <SideMenu />
      </div>
      <div className="w-full flex flex-col mt-5 mx-2">
        <video className="w-full h-[449px]" controls width="100%">
          <source src="" type="video/webm" />
          Sorry, your browser doesn't support videos
        </video>
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
        {movieDetail ? (
          <div className=" w-full flex flex-row gap-x-4 mt-5 px-8 font-poppins">
            <div className="flex flex-col w-full">
              <div className="flex flex-row items-center  font-poppins ">
                <h3 className=" text-[24px] font-[700] leading-[34.5px]">
                  {movieDetail.title} .{" "}
                  {movieDetail.release_date.substring(0, 4)} . PG-13 .{" "}
                  {duration}
                </h3>
                <div className="flex flex-row items-center ">
                  {movieDetail &&
                    movieDetail.genres.map((genre, index) => (
                      <div
                        key={index}
                        className=" ml-3 text-[15px] font-[500] leading-[22.5px]"
                      >
                        {genre.name}
                      </div>
                    ))}
                </div>
              </div>
              <p className=" mt-4 text-[20px] font-[400] leading-[30px] text-[#333333]">
                {movieDetail.overview}
              </p>
              <div className="mt-5 flex flex-col text-[20px] leading-[30px] font-[400] gap-y-4">
                <div className="flex flex-row">
                  <p className="text-[#333333]">Director :</p>
                  <p className="pl-1 text-[#BE123C]">Joseph Kosinski</p>
                </div>
                <div className="flex flex-row">
                  <p className="text-[#333333]">Writers :</p>
                  <p className="pl-1 text-[#BE123C]">
                    Jim Cash, Jack Epps Jr, Peter Kosinski
                  </p>
                </div>
                <div className="flex flex-row">
                  <p className="text-[#333333]">Stars :</p>
                  <p className="pl-1 text-[#BE123C]">
                    Tom Cruise, Jennifer Connelly
                  </p>
                </div>
                <div className="flex flex-row justify-between border rounded-[10px]">
                  <button className="bg-[#BE123C] text-[20px] text-white rounded-[10px] px-3 py-1">
                    Top rated movie #65
                  </button>
                  <select className="px-3">
                    <option>Awards 9 Nomination</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-[360px] flex flex-col font-poppins">
              <div className="flex flex-row justify-end items-center">
                <img
                  className="h-[25px] mr-1 "
                  src={star}
                  alt={`${star} svg`}
                />
                <span> 8.5 </span> <span>| 350k</span>
              </div>
              <button className="w-full bg-[#BE123C] text-white text-[20px] font-[500] leading-[30px] py-1 rounded-[10px]">
                See showtimes
              </button>
              <button
                className=" mt-1 w-full bg-[#be123d46] text-[20px] font-[500] text-[
#333333] py-1 rounded-[10px] border border-[#BE123C]"
              >
                More watch options
              </button>
            </div>
          </div>
        ) : !isPending && (
          <p className="text-lg font-semibold text-center mt-16 text-red-600">
            {err}! Cannot fetch Movie details, please 
            <button className='pl-1 underline' onClick={()=>window.location.reload()}> try again</button>
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
