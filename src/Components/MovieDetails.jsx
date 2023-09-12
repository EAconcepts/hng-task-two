import React from "react";
import { useParams, NavLink } from "react-router-dom";
import star from '../assets/star.svg'

import SideMenu from "./SideMenu";

const MovieDetails = () => {
  const { id } = useParams();
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
        <div className=" w-full flex flex-row gap-x-4 mt-5 px-8 font-poppins">
          <div className="flex flex-col w-full">
            <div className="flex flex-row items-center  font-poppins ">
              <h3 className="text-[23px] font-[700] leading-[34.5px]">
                Top Gun: Maverick . 20222 . PG-13 . 2h 10m
              </h3>
              <p className=" ml-7 text-[15px] font-[500] leading-[22.5px]">
                Action
              </p>
              <p className="ml-7 text-[15px] font-[500] leading-[22.5px]">
                Drama
              </p>
            </div>
            <p className=" mt-4 text-[20px] font-[400] leading-[30px] text-[#333333]">
              After thirty years, Maverick is still pushing the envelope as a
              top naval aviator, but must confront ghosts of his past when he
              leads TOP GUN's elite graduates on a mission that demands the
              ultimate sacrifice from those chosen to fly it.
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
          <div className="w-[360px] border flex flex-col font-poppins">
            <div className="flex flex-row justify-end items-center">
              <img className="h-[25px] mr-1 " src={star} alt={`${star} svg`} />
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
      </div>
    </div>
  );
};

export default MovieDetails;
