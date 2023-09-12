import tv from "../assets/tv.svg";
import home from "../assets/home.svg";
import logout from "../assets/logout.svg";
import movieProjector from "../assets/movieProjector.svg";
import calendar from "../assets/calendar.svg";
import tvShow from "../assets/tvShow.svg";
import { Link, NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <aside className="fixed  h-screen w-[226px] border border-[#00000030] rounded-r-[45px]">
      <nav className="w-full flex flex-col items-center">
        <Link to="/" className="flex flex-row items-center gap-x-[24px] mt-10">
          <img className="h-[50px] " src={tv} alt={`${tv} svg`} />
          <h2 className="font-[700] text-[24px] leading-[24px] text-[#333333]">
            MovieBox
          </h2>
        </Link>
        <nav className="w-full flex flex-col font-poppins   mt-16 gap-y-8 text-[#666666] text-[18px]">
          <NavLink
            to="#"
            className="flex flex-row gap-x-3 px-[42px] items-center"
          >
            <img className="h-[25px] " src={home} alt={`${home} svg`} />
            <h3 className="font-[600] ">Home</h3>
          </NavLink>
          <NavLink
            to="#"
            className="flex flex-row gap-x-3 px-[42px] py-2 items-center bg-[#be123d1e] border-r-2 border-[
#be123c]"
          >
            <img
              className="h-[25px] "
              src={movieProjector}
              alt={`${movieProjector} svg`}
            />
            <h3 className="font-[600] text-[#BE123C]">Movies</h3>
          </NavLink>
          <NavLink
            to="#"
            className="flex flex-row gap-x-3 px-[42px] items-center"
          >
            <img className="h-[25px] " src={tvShow} alt={`${tvShow} svg`} />
            <h3 className="font-[600]">Tv Series</h3>
          </NavLink>
          <NavLink
            to="#"
            className="flex flex-row gap-x-3 px-[42px] items-center"
          >
            <img className="h-[25px] " src={calendar} alt={`${calendar} svg`} />
            <h3 className="font-[600] text-[16px] leading-[30px]">
              Tv Upcoming
            </h3>
          </NavLink>
        </nav>
        <div className="w-[170px] mt-4 flex flex-col border p-3 rounded-[20px] bg-[#F8E7EB] border-[#BE123C]">
          <p
            className="mt-5 font-poppins font-[600] text-[15px] text-[#333333] leading-[22.5px]
"
          >
            Play movie quizes and earn free tickets
          </p>
          <p className=" mt-2 text-[12px] font-poppins font-[500] leading-[18px] text-[#666666]">
            50k people are playing now
          </p>
          <div className="text-center">
            <button className="bg-[#be123d2a] rounded-[30px] py-1 px-3 text-center text-[#BE123C] text-[12px] leading-[18px] font-poppins font-[500]">
              Start playing
            </button>
          </div>
        </div>
      </nav>
      <div className="absolute bottom-0 mb-4 flex flex-row w-full justify-center ">
        <img className="h-[25px] " src={logout} alt={`${logout} svg`} />
        <button>Log out</button>
      </div>
    </aside>
  );
};

export default SideMenu;
