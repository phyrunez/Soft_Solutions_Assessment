import { images } from "../constants";
import { MenuData } from "../data";

const Menu = () => {
  return (
    <div className="w-[97%] mx-auto rounded-md shadow-lg overflow-hidden bg-white">
      <div className="flex flex-row justify-between py-6 px-10">
        <h3 className="font-bold">Menu</h3>
        <ul className="flex flex-row gap-4">
          <li className="text-sm text-[#6C5DD3] border-[#6C5DD3] pb-4 border-b-2">
            All Category
          </li>
          <li className="text-sm">Breakfast</li>
          <li className="text-sm">Lunch</li>
          <li className="text-sm">Dinner</li>
        </ul>
      </div>

      <hr className="border-t -mt-6 border-gray-200" />

      <div className="grid grid-cols-[70%_30%] gap-2 mt-3 mx-auto w-[95%]">
        <div className="relative rounded-md">
          <img src={images.Menu_1} className="w-full rounded-md h-[230px]" />
          <div className="absolute bottom-0 ml-3 backdrop-blur-sm justify-center w-[97%] border border-none mb-4 rounded-md p-4 bg-white bg-opacity-50 items-center mx-auto">
            <div className="flex flex-row justify-between z-10">
              <div>
                <h3 className="text-sm font-bold">Surf & Turf Gift Basket</h3>
                <span className="text-xs text-gray-600">456 Served</span>
              </div>
              <div>
                <span className="text-sm">$89.24</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-md">
          <img src={images.Menu_2} className="w-full rounded-md h-full" />
          <div className="absolute bottom-0 backdrop-blur-sm justify-center w-[90%] border border-none mb-4 rounded-md p-4 bg-white bg-opacity-50 items-center mx-auto">
            <div className="flex flex-row justify-between z-10">
              <div>
                <h3 className="text-sm font-bold">Shaking Beef Tri-Tip</h3>
                <span className="text-xs text-gray-500">456 Served</span>
              </div>
              <div>
                <span className="text-sm ">$69.46</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 mt-3 mb-6 mx-auto ml-8 w-[101%]">
        {MenuData.map((menu) => {
          return (
            <div className="relative rounded-md" id={menu.id}>
              <img src={menu.image} className="w-full rounded-md h-[230px]" />
              <div className="absolute bottom-0 ml-3 backdrop-blur-sm justify-center w-[90%] border border-none mb-4 rounded-md p-4 bg-white bg-opacity-50 items-center mx-auto">
                <div className="flex flex-row justify-between z-10">
                  <div>
                    <h3 className="text-sm font-bold">{menu.name}</h3>
                    <span className="text-xs text-gray-500">{menu.served}</span>
                  </div>
                  <div>
                    <span className="text-sm pr-3">{menu.amount}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
