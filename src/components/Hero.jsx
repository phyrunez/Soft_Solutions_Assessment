import { heroData } from "../data";

const Hero = () => {
  return (
    <div className="grid grid-cols-4 gap-5 mt-14 mb-6 mx-auto w-[97%] ">
      {heroData.map((d) => {
        return (
          <div
            className="rounded-md bg-white backdrop-blur-sm py-8 px-6 shadow-lg"
            id={d.id}
          >
            <img src={d.icon} className="w-8 h-8" />
            <div className="pt-2">
              <h4 className="text-xs text-gray-500">{d.title}</h4>
              <p className="text-xl mt-2 text-black font-semibold ">
                {d.number}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;