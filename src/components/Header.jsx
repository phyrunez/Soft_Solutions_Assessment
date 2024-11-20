import React, { useState } from "react";
import { images } from "../constants";
import { AlignRight } from "lucide-react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="container bg-white shadow-lg max-w-full md:max-w-full">
      <div className="flex flex-row mx-auto justify-between w-[95%] items-center">
        <div className="flex flex-col py-4">
          <h1 className="font-bold text-lg">Hi, Taylor!</h1>
          <span className="text-gray-500 text-xs">
            Let's check your store today
          </span>
        </div>

        <div className="gap-5">
          <div
            className="md:block lg:hidden right-0 cursor-pointer"
            onClick={() => setShowNav(!showNav)}
          >
            <AlignRight />
          </div>
          {showNav && (
            <div
              className="absolute lg:hidden right-5 z-10 mt-3 w-60 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div className="py-3 px-2" role="none">
                <div className="flex flex-row bg-gray-100 border rounded-xl space-x-4">
                  <img src={images.search} className="h-4 w-4 mt-4 ml-3" />
                  <input
                    className="w-[200px] h-[48px] bg-gray-100 outline-none pr-3 text-sm rounded-xl"
                    placeholder="Search..."
                  />
                </div>
                <div className="flex flex-row">
                  <img src={images.msg} />
                  <img src={images.notification} />
                </div>
                {/* <div>
                  <img src={images.notification} />
                </div> */}
                <div className="flex flex-row mt-2">
                  <img src={images.avatar} className="w-9 h-9" />
                  <span className="pl-4 text-sm font-bold pt-2">
                    Tynisha Obey
                  </span>
                </div>
              </div>
            </div>
          )}
          <div className="lg:flex lg:flex-row lg:space-x-3 hidden md:hidden">
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
