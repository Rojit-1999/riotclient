import React from "react";
import Img1 from "../Assets/Images/LOL.webp";
import { SiLeagueoflegends, SiValorant } from "react-icons/si";
import { GiWildfires, GiReactor, GiSteamLocomotive } from "react-icons/gi";
import LOLW from "../Assets/Images/LOLw.png";
import LOR from "../Assets/Images/lolr.jpeg";
import TF from "../Assets/Images/tft.jpg";
import Valo from "../Assets/Images/Valoboy.jpeg";
import Event from "../Assets/Images/event.webp";
import { GrApple } from "react-icons/gr";
import { FaGooglePlay } from "react-icons/fa";


function Allgames() {
  return (
    <div className="bg-[#121212] text-white py-[50px] px-[40px]  ">
      <div className="font-[600] text-[26px]">All Games</div>
      <div className="grid grid-cols-3  items-center gap-[26px] ">
        {data.map((games) => (
          <div className="pt-[20px]">
            <img
              src={games.Image}
              alt=""
              className="w-[450px] h-[300px] rounded-[14px] hover:border-[3px] hover:border-slate-200 "
            />
            <div className="font-[600] text-white text-[26px] flex gap-[10px] items-center pt-[14px]">
              <div>{games.Icon}</div>
              <div>{games.Text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-[50px]">
        <div className="font-[600] text-white text-[29px]  ">Special Event</div>
        <div className="pt-[25px]">
          <img
            src={Event}
            alt=""
            className="h-[500px] w-[1200px] rounded-[16px]  "
          />
        </div>
        <div className="pt-[25px] flex justify-between items-center ">
          <div>
            <div className="font-bold text-[28px]">
              Download Riot Mobile Now
            </div>
            <div className=" grid grid-cols-2 ">
              <div className="pt-[10px]">
                Riot mobile make it easy to discover new content, stay informed
                across all <br />
                of our title and events, and connect to other player outside of
                the game.
              </div>
              <div className="flex gap-[20px] items-center">
                <button className="flex items-center gap-[14px] text-[20px] font-[500] bg-[#3b3b3b] px-[30px] py-[16px] rounded-[22px]">
                  <GrApple /> ios App Store
                </button>
                <button className="flex items-center gap-[14px] text-[20px] font-[500] bg-[#3b3b3b] px-[30px] py-[16px] rounded-[22px]">
                  <FaGooglePlay /> ios App Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Allgames;

const data = [
  {
    Image: Img1,
    Icon: <SiLeagueoflegends />,
    Text: "League of Legend",
  },
  {
    Image: LOLW,
    Icon: <GiWildfires />,
    Text: "League of Legend:Wild Rift",
  },
  {
    Image: LOR,
    Icon: <GiReactor />,
    Text: " Legend of Runterra",
  },
  {
    Image: TF,
    Icon: <GiSteamLocomotive />,
    Text: " Teamfight Tactices",
  },
  {
    Image: Valo,
    Icon: <SiValorant />,
    Text: " Valorant",
  },
];
