import React, { useState } from "react";
import { SiWindows, SiRiotgames, SiValorant } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import video1 from "../Assets/Video/hero.mp4";
import valo from "../Assets/Images/Valoboy.jpeg";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

function Nav() {
  const [change, setChange] = useState();
  const [rojit, setRojit] = useState();

  function clickHandler() {
    setChange(!change);
  }
  function clickHandler1() {
    setRojit(!rojit);
  }

  return (
    <div className="font-[600] relative">
      <div className="bg-[#2d2d2d] flex justify-between items-center p-[30px]">
        <div className="bg-[#3b3b3b] rounded-[12px] h-[50px] w-[50px] flex flex-col items-center justify-center hover:bg-[#4a4a4a]  hover:text-white text-[#bcbbbb] hover:cursor-pointer">
          <SiWindows className="h-[20px] w-[20px]" />
        </div>

        <div className="flex gap-[5px]">
          <SiRiotgames className="text-white h-[60px] w-[60px]" />
          <div className="text-white font-bold text-[22px]">
            RIOT <p className="mt-[-5px]"> GAMES</p>
          </div>
        </div>

        <div className="flex items-center bg-[#3b3b3b] justify-evenly h-[50px] p-[10px] gap-[14px] rounded-[16px] ">
          <div className="flex items-center gap-[10px] hover:cursor-pointer hover:bg-[#4a4a4a] p-[5px] px-[8px] rounded-[12px] text-white font-medium">
            <SiValorant className="text-red-600 " /> 1
          </div>
          <div>
            <div className="h-[40px] w-[40px] rounded-full bg-[#2d2d2d] relative flex flex-col items-center justify-center hover:text-white hover:cursor-pointer hover:bg-[#4a4a4a]">
              <FaUserAlt
                onClick={clickHandler}
                className="h-[20px] w-[20px] "
              />
            </div>
            {/* tala ko section */}
            {change && (
              <div className="w-[210px] h-[250px] rounded-[10px] bg-[#3b3b3b] absolute right-[30px] top-[90px]">
                <div className="text-[20px] p-[10px] text-white">
                  Haki <span className="text-[#d6d6d6]">#6598</span>
                </div>
                <div className="h-[1px] w-[210px] bg-[#6f6f6f]">
                  <div className="px-[10px] text-[14px]">
                    <div className="text-[#d6d6d6] pt-[14px] font-semibold flex justify-between items-center">
                      ACCOUNT DETAILS{" "}
                      <MdOutlineArrowOutward className="text-[#6f6f6f] h-[20px] w-20px]" />
                    </div>
                    <div className="text-[#d6d6d6] pt-[14px] font-semibold flex justify-between items-center">
                      ACCOUNT SECURITY{" "}
                      <MdOutlineArrowOutward className="text-[#6f6f6f] h-[20px] w-20px]" />
                    </div>
                    <button onClick={clickHandler1}>
                      <div className="text-[#d6d6d6] pt-[14px] font-semibold ">
                        SETTING
                      </div>
                    </button>
                    <br />
                    <Link to="/">
                      <button>
                        <div className="text-[#d6d6d6] pt-[14px] font-semibold ">
                          SIGN OUT
                        </div>
                      </button>
                    </Link>
                    <div className="text-[#d6d6d6] pt-[14px] font-semibold ">
                      EXIT{" "}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* My Games Starts form here */}

      <div className="pl-[40px] bg-[#2d2d2d] py-[50px]">
        <div className=" text-white text-[26px]  ">My games</div>
        <div className="pt-[30px] object-cover  overflow-hidden h-[250px] w-[350px]">
          <img
            src={valo}
            alt=""
            className="rounded-[12px] hover:scale-105 duration-300  hover:border-[#d6d6d6] "
          />
        </div>
        <div className="pt-[25px]">
          <div className="flex gap-[14px] text-[20px] text-white items-center ">
            <SiValorant className="h-[22px] w-[22px]" /> VALORANT
          </div>
        </div>
      </div>
      {rojit && (
        <div
          
          className="bg-black h-[630px] w-[1300px] m-auto  mt-[50px] rounded-[14px] absolute top-0 right-[100px]"
        >
          <IoClose onClick={clickHandler1} className="w-[28px] h-[28px] bg-[#2d2d2d] text-white p-[4px] hover:cursor-pointer float-right mt-[20px] mr-[20px]" />
          <div className="w-[400px] text-white">
            <div className="font-[600] text-[24px] ">Setting</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
