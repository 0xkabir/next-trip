import React from "react";
import HeroSectionCard from "../../components/Cards/HeroSectionCard";

const img = `https://images.hdqwalls.com/download/forest-landscape-mountain-nature-river-scenic-4k-lq-1920x1080.jpg`;

const Slider = () => {
  return (
    <section className="h-[80vh] pb-6 bg-blue-100 px-[8%] pt-[20vh] lg:pt-[20vh] text-center opacity-100" style={{ backgroundImage: `url(${img})`, backgroundSize: "scroll" }} >

      <h1 className="text-3xl lg:text-5xl font-bold mb-2 bg-clip-text bg-gradient-to-r"><span className="text-white">Search your next</span> <span className="underline text-cyan-400"><span className="text-white">Holiday</span></span></h1>

      <p className="text-gray-700 my-8 text-white text-2xl">Check Our Best Deals...</p>

      <div className="w-11/12 md:w-80 lg:w-96 mx-auto mb-8">
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
