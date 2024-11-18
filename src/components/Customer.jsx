import { images } from "../constants";
import { CustomerListData } from "../data";

const Customer = () => {
  return (
    <div className="grid grid-cols-[75%_24%] my-5 gap-2 w-[97%] mx-auto">
      <div className="rounded-md shadow-lg overflow-hidden bg-white">
        <div className="py-6 px-10">
          <h3 className="font-bold pb-4">Customer Map</h3>
        </div>

        <hr className="border-t -mt-6 border-gray-200" />

        <div className="relative mt-3 mx-auto w-[97%]">
          <img src={images.map} className="w-full my-5" />

          <img
            src={images.mapMarker}
            className="absolute z-10 top-[40px] right-[140px] w-6 h-6 cursor-pointer"
          />

          <div class="absolute bottom-[130px] left-[180px] mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded-md">
            This is a tooltip
          </div>

          <img
            src={images.mapMarker}
            className="absolute z-10 top-[60px] left-[247px] w-6 h-6 cursor-pointer"
          />

          <img
            src={images.mapMarker}
            className="absolute z-10 top-[147px] left-[460px] w-6 h-6 cursor-pointer"
          />

          <img
            src={images.mapMarker}
            className="absolute z-10 top-[140px] right-[140px] w-6 h-6 cursor-pointer"
          />

          <img
            src={images.mapMarker}
            className="absolute z-10 top-[205px] right-[250px] w-6 h-6 cursor-pointer"
          />

          <img
            src={images.mapMarker}
            className="absolute z-10 bottom-0 right-[80px] w-6 h-6 cursor-pointer"
          />

          <img
            src={images.mapMarker}
            className="absolute z-10 bottom-[25px] right-[250px] w-6 h-6 cursor-pointer"
          />

          <img
            src={images.mapMarker}
            className="absolute z-10 bottom-[32px] right-[415px] w-6 h-6 cursor-pointer"
          />

          <img
            src={images.mapMarker}
            className="absolute z-10 bottom-[113px] left-[226px] w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
      <div className="rounded-md shadow-lg overflow-hidden p-6 bg-white">
        <h1 className="font-bold pb-4">Customer List</h1>
        {CustomerListData.map((d, index) => (
          <div className="flex flex-row py-2" key={index}>
            <img src={d.image} />
            <div className="flex flex-col pl-3">
              <h4 className="font-bold text-sm">{d.name}</h4>
              <span className="text-xs">{d.email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customer;
