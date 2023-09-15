import React from 'react'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'
import twitter from './assets/twitter.svg'
import youtube from './assets/youtube.svg'

const Footer = () => {
  return (
    <div className="w-full mt-28 flex flex-col items-center font-dmSans">
      <div className="w-full flex flex-row justify-center my-2 gap-x-10">
        <img src={facebook} alt="facebook icon" className="" />
        <img src={instagram} alt="instagram icon" className="" />
        <img src={twitter} alt="twitter icon" className="" />
        <img src={instagram} alt="instagram icon" className="" />
      </div>
      <div className="flex flex-row my-4 gap-x-5 text-[18px] leading-[23.44px] font-[700] text-[#111827]">
        <p>Conditions of Use </p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <p className="mt-3 text-[#6B7280]">&copy; 2021 MovieBox by EmmyCodes</p>
    </div>
  );
}

export default Footer
