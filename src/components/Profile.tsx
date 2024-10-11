import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { IoIosArrowForward } from "react-icons/io";
import { ProfileStats } from "./chart";

const RightSide = () => {
  return (
    <div className="w-64 bg-white p-4 border-l sm:block hidden">
      <div className="flex items-center mb-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="ml-3">
          <h3 className="font-bold">Taras Vlasenko</h3>
          <p className="text-xs text-orange-400">Rising Leader</p>
        </div>
      </div>
      <div className="my-4">
        <h4 className="text-xs text-gray-500">Completion Profile</h4>
        <div className="bg-gray-200 rounded-full h-3">
          <div
            className="bg-orange-500 rounded-full h-full"
            style={{ width: "75%" }}
          ></div>
        </div>
        <p className="text-xs mt-1">75% complete</p>
      </div>
      <div className="mb-4">
        <p className="text-sm font-bold">Applications Submitted: 3</p>
        <p className="text-sm font-bold">Recommendations: 340</p>
        <p className="text-sm font-bold">Saved: 231</p>
      </div>
      <div className="mb-4">
        <h4 className="font-bold text-gray-900">Profile Visit Metrics</h4>
        <div className="text-xs text-gray-500">23,400 visits last 7 days</div>

        <div className="mt-2 h-full bg-gray-50 mb-7">
          <ProfileStats />
        </div>

        <div className="my-4 flex justify-between">
          <h1 className="font-semibold">Archive</h1>
          <h1 className="text-orange-400">3</h1>
        </div>

        <div className="my-14 flex justify-between">
          <h1 className="font-semibold">Help & Support</h1>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
