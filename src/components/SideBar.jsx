import { images } from "../constants";
import { sidebarData } from "../data";

const SideBar = () => {
  return (
    <div className="flex flex-col bg-[#FFFFFF] w-[20%] h-[980px] justify-center">
      <div className="mx-auto py-5">
        <img src={images.Logo} alt="Logo" />

        <div className="flex flex-col gap-5 mt-24">
          {sidebarData.map((d) => {
            return (
              <>
                {d.name === "Dashboard" ? (
                  <div
                    className="flex flex-row bg-[#6C5DD3] p-3 rounded-md"
                    id={d.id}
                  >
                    <img src={d.icon} alt="icon" />
                    <span className="px-5 text-white">{d.name}</span>
                  </div>
                ) : (
                  <div className="flex flex-row bg-[#FFFFFF] p-3 " id={d.id}>
                    <img src={d.icon} alt="icon" />
                    <span className="px-5">{d.name}</span>
                    <span className="ml-6">{d.ordersIcon}</span>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row bg-gray-100 mt-56 mb-10 mx-auto w-[90%] rounded-md">
        <div className="flex flex-col mt-3 px-4">
          <img
            src={images.progressCircle}
            height="40px"
            width="40px"
            alt="progress circle"
          />
          <div className="py-2">
            <h1 className="font-bold text-black">Subscription Plan</h1>
            <p className="text-xs">
              Your Subscription plan will expire soon please upgrade!
            </p>
            <p className="text-[#6C5DD3] pt-5">Upgrade</p>
          </div>
        </div>
        <div className="-mt-1">
          <img src={images.buttonClose} height="60px" width="60px" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
