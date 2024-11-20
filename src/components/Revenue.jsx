import { Ellipsis } from "lucide-react";
import { images } from "../constants";

const Revenue = () => {
  return (
    <div className="grid grid-cols-1 lg:grid lg:grid-cols-[50%_50%] md:grid md:grid-cols-1 my-5 lg:gap-1 md:gap-4 gap-4 lg:w-[97%] md:w-[97%] w-[97%] mx-auto">
      <div className="rounded-md shadow-lg overflow-hidden bg-white">
        <div className="relative flex flex-row justify-between py-6 px-10">
          <h3 className="font-bold pb-4">Revenue</h3>
          <div className="pb-4">
            <Ellipsis />
          </div>

          <div
            className="absolute right-10 z-10 mt-5 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div className="py-1 px-2" role="none">
              <div className="flex flex-row space-x-3">
                <img src={images.carbonView} className="h-4 w-4 mt-3" />
                <a
                  href="#"
                  className="block py-2 pt-3 text-xs text-gray-400"
                  role="menuitem"
                  tabindex="-1"
                >
                  View
                </a>
              </div>
              <div className="flex flex-row ">
                <img src={images.bxExport} className="h-4 w-4 mt-3" />
                <a
                  href="#"
                  className="block px-3 py-3 text-xs text-gray-400"
                  role="menuitem"
                  tabindex="-1"
                >
                  Export
                </a>
              </div>
              <div className="flex flex-row space-x-3">
                <img src={images.featherIcon} className="h-4 w-4 mt-2" />
                <a
                  href="#"
                  className="block py-2 text-xs text-[#FF754C]"
                  role="menuitem"
                  tabindex="-1"
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t -mt-6 border-gray-200" />

        <div className="mt-3 px-10">
          <p className="text-xl my-3 text-black font-semibold">$112,340</p>
          <img src={images.chart} className="pt-10 w-full" />

          <div className="my-10">
            <ul className="flex flex-row gap-5">
              <li className="space-x-5">
                <img src={images.pending} />
                <p className="text-xs -mt-3.5">Pending (10%)</p>
              </li>
              <li className="space-x-5">
                <img src={images.income} />
                <p className="text-xs -mt-3.5">Income</p>
              </li>
              <li className="space-x-5">
                <img src={images.expense} />
                <p className="text-xs -mt-3.5">Expense</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto rounded-md shadow-lg md:w-full w-full overflow-hidden bg-white">
        <div className="flex flex-row justify-between py-6 px-10">
          <div className="flex flex-col -mt-3.5">
            <h3 className="font-bold">Customers</h3>
            <span className="text-xs text-gray-400">
              Customers that buy our products
            </span>
          </div>
          <div className="pb-4">
            <Ellipsis />
          </div>
        </div>

        <hr className="border-t -mt-6 border-gray-200" />

        <div className="mt-3 px-10 grid grid-cols-2 md:w-full md:mx-auto">
          <div>
            <img src={images.graph} />
          </div>
          <div className="flex flex-col gap-5 lg:mt-10 md:mt-10 mt-7">
            <div className="flex flex-row space-x-4">
              <img src={images.chart_1} />
              <div className="flex flex-col pt-3">
                <h3 className="text-sm font-bold">+ 18%</h3>
                <span className="lg:text-sm md:text-sm text-xs text-gray-400">
                  Daily customers
                </span>
              </div>
            </div>

            <div className="flex flex-row space-x-4">
              <img src={images.chart_2} />
              <div className="flex flex-col pt-3">
                <h3 className="text-sm font-bold">+ 14%</h3>
                <span className="lg:text-sm md:text-sm text-xs w-full text-gray-400">
                  Weekly new customers
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 mt-4">
          <ul className="flex flex-row gap-5 items-center mx-auto justify-center">
            <li className="space-x-5">
              <img src={images.currentCust} />
              <p className="text-xs -mt-3.5">Current customers</p>
            </li>
            <li className="space-x-5">
              <img src={images.newCust} />
              <p className="text-xs -mt-3.5">New customers</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
