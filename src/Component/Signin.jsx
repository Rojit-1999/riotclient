import React from "react";
import { SiRiotgames } from "react-icons/si";
import { FaFacebook, FaXbox } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import { IoMdArrowForward } from "react-icons/io";
import Cover from "../Assets/Images/valo.jpg"
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Signout() {
  return (
    <div className="flex">
      <div className="py-[50px] w-[450px]  px-[50px]  ">
        <div>
          <div className="flex gap-[5px] text-red-600 flex-col items-center">
            <div className="flex gap-[8px]">
              <SiRiotgames className=" h-[60px] w-[60px]" />
              <div className=" font-bold text-[22px]">
                RIOT <p className="mt-[-5px]"> GAMES</p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <h3 className="font-[600] text-[24px] text-center">Sign In</h3>
          <div className="pt-[20px] ">
            <input
              type="text"
              placeholder="USERNAME"
              className="h-[40px] w-[268px] rounded-[5px] font-[600] text-[14px] pl-[5px] bg-[#f0f0f0]"
            />
            <input
              type="text"
              placeholder="PASSWORD "
              className="h-[40px] w-[268px] rounded-[5px] font-[600] text-[14px] pl-[5px] bg-[#f0f0f0] mt-[20px]"
            />
          </div>
          <div className="flex gap-[10px] mt-[25px]  ">
            <div className="h-[28px] w-[59px] rounded-[4px] flex flex-col items-center text-white bg-blue-500">
              <FaFacebook className=" h-[20px] w-[20px] pt-[4px]" />
            </div>
            <div className="h-[28px] w-[59px] rounded-[4px] flex flex-col items-center text-white shadow-md">
              <FcGoogle className=" h-[20px] w-[20px] pt-[4px]" />
            </div>
            <div className="h-[28px] w-[59px] rounded-[4px] flex flex-col items-center text-white bg-[#2d2d2d]">
              <GrApple className=" h-[20px] w-[20px] pt-[4px]" />
            </div>
            <div className="h-[28px] w-[59px] rounded-[4px] flex flex-col items-center text-white bg-green-500">
              <FaXbox className=" h-[20px] w-[20px] pt-[4px]" />
            </div>
          </div>
          <div className=" mt-[20px] font-[400] text-[16px]">
            <input type="checkbox" name="Stay sign in" id="" /> Stay sign in
          </div>
        </div>
        <br /><br />
        {/* login arrow */}
        
        <div className="flex flex-col items-center">
            <Link to='Back'>
          <div className="p-[20px] border-[2px] border-[#d6d6d6] rounded-[18px] w-[70px] text-[#d6d6d6] mt-[30px] hover:bg-red-500 hover:text-white">
            <IoMdArrowForward className="h-[24px] w-[24px]" />
          </div>
          </Link>
        </div>
{/* Bottom section here */}
        <div className="text-[#d6d6d6] mt-[60px] text-center">
                <div>
                    <h1 className="font-[600]">Can't sing in?</h1>
                </div>
                <div className="uppercase text-[10px] font-[600] pt-[5px]">
                    This app is protected by Hcaptcha and its <span className="underline"> privacy policy</span> and <span className="underline">terms of service apply</span> 
                </div>
        </div>
      </div>

      {/* right section */}

      <div className="relative">
        <img src={Cover} alt="" className="h-[700px] hidden sm:block" />
        <div className="h-[40px] w-[40px] rounded-full absolute top-[20px] right-[50px] bg-[#646464] flex flex-col items-center justify-center hover:text-white hover:cursor-pointer hover:bg-[#4a4a4a]">
            <FaUserAlt className="h-[20px] w-[20px] " />
          </div>
      </div>
    </div>
  );
}

export default Signout;
