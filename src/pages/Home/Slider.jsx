import React from "react";
import HeroSectionCard from "../../components/Cards/HeroSectionCard";

const img = `https://wallpaperaccess.com/full/1192101.jpg`;

const Slider = () => {
  return (
    <section className="h-[90vh] pb-6 bg-blue-100 px-[8%] pt-[20vh] lg:pt-[20vh] text-center opacity-100 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${img})`, backgroundSize: "scroll" }} >

      <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-2 bg-clip-text bg-gradient-to-r"><span className="text-white">Search your next</span> <span className="underline text-[skyblue]"><span className="text-white">Holiday</span></span></h1>

      <p className="my-8 text-[white] text-3xl font-bold ">Check Our Best Deals...</p>

      <div className="w-11/12 z-0 md:w-80 lg:w-96 mx-auto mb-8">
        <div className="relative flex items-center">
          <input id="10" placeholder="Find your Destination..." type="text" className="peer relative h-10 w-full rounded-md bg-gray-50 pl-4 pr-20 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:drop-shadow-lg" />
          <img className="absolute right-2 h-6 w-6 rounded-md bg-transparent text-xs font-semibold text-white transition-all duration-200" src="https://cdn-icons-png.flaticon.com/512/8915/8915520.png" alt="search icon"></img>
        </div>
      </div>

      <div className="gap-6 lg:grid-cols-4 px-[20%] hidden lg:grid">
        <HeroSectionCard name={"RELAX"} logo="https://cdn-icons-png.flaticon.com/512/2738/2738730.png" />
        <HeroSectionCard name={"CULTURAL"} logo="https://cdn-icons-png.flaticon.com/512/2787/2787919.png" />
        <HeroSectionCard name={"EXPLORE"} logo="https://cdn-icons-png.flaticon.com/512/2822/2822323.png" />
        <HeroSectionCard name={"CAPTURE"} logo="https://cdn-icons-png.flaticon.com/512/3249/3249935.png" />
      </div>

    </section>
  );
};

export default Slider;
