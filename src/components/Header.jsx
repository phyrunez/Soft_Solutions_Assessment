import React from "react";
import { images } from "../constants";

const Header = () => {
  return (
    <div className="container mx-auto bg-white shadow-lg w-full">
      <div className="flex flex-row mx-auto justify-between w-[95%] items-center">
        <div className="flex flex-col py-4">
          <h1 className="font-bold text-lg">Hi, Taylor!</h1>
          <span className="text-gray-500 text-xs">
            Let's check your store today
          </span>
        </div>
        <div className="gap-5">
          <div className="flex flex-row space-x-3">
            <div className="flex flex-row bg-gray-100 border rounded-xl space-x-4">
              <img src={images.search} className="h-4 w-4 mt-4 ml-3" />
              <input
                className="w-[200px] h-[48px] bg-gray-100 outline-none pr-3 text-sm rounded-xl"
                placeholder="Search..."
              />
            </div>
            <div>
              <img src={images.msg} />
            </div>
            <div>
              <img src={images.notification} />
            </div>
            <div className="flex flex-row mt-2">
              <img src={images.avatar} className="w-9 h-9" />
              <span className="pl-4 text-sm font-bold pt-2">Tynisha Obey</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
