import React from "react";
// import img from "../../assets/images/beach.jpg";
// import img2 from "../../assets/images/bot.jpg";
import img3 from "../../assets/images/city6.jpg";

const NextHoliday = () => {
	return (
		<div className="hero h-96 bg-no-repeat bg-cover w-full"  style={{ backgroundImage: `url(${img3})`, }}>
			<div className="hero-overlay bg-opacity-30"></div>
			<div className="hero-content text-justify items-center text-neutral-content">
				<div className="flex flex-col lg:flex-row">
					<h1 className="mb-5 text-5xl font-bold">Your <br /> Next <span className="underline text-pink-500">Holiday</span></h1>
                   
					<button className="btn bg-white text-pink-400 ml-20 mt-8 rounded-3xl">View all Package</button>
				</div>
			</div>
		</div>
	);
};

export default NextHoliday;
