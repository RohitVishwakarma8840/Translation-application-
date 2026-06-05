import React from "react";
import { Globe, ChevronDown, Bell } from "lucide-react";

const MainSection = () => {
  return (
    <div className="w-full h-full bg-[#f5f6fa] px-8 py-3">
      <div className="flex items-center justify-between">

        {/* Left Section */}
        <div>
          <h1 className="text-[20px] font-bold text-[#111827] leading-tight">
            Good morning, Rohit! 👋
          </h1>

          <p className="mt-1 text-[14px] text-[#6B7280]">
            Let's break language barriers together.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Language Selector */}
          <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-[13px] font-medium text-gray-700 shadow-sm hover:bg-gray-50">
            <Globe size={14} className="text-gray-500" />

            <span>47 Languages</span>

            <ChevronDown size={14} className="text-gray-400" />
          </button>

          {/* Notification */}
          <div className="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
            <Bell size={16} className="text-gray-500" />

            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-violet-500"></span>
          </div>

          {/* Profile Image */}
          <div className="h-9 w-9 overflow-hidden rounded-full">
            <img
              src="https://i.pravatar.cc/100?img=12"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </div>

  {/* // hero section  */}
    <div className="hero mt-2  w-full h-[40%] bg-amber-400">
   
    <div className="cta p-4 bg-[#dadada] m-auto w-[95%] h-full flex justify-around items-center rounded-lg border-[#dadada] border-2">


      <div className="left w-[50%] h-full bg-amber-950"></div>
 

         <div className="right w-[50%] h-full bg-gray-900"></div>

    </div>


    </div>

    </div>
  );
};

export default MainSection;