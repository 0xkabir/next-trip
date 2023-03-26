import React from "react";
const BestBeaches = () => {
	return (
		<div className="py-12 md:py-16">
			<div className="hero">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="lg:w-1/2 mt-[-60px] hidden lg:block">
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/5gOwRpgdzEE"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						></iframe>
					</div>
					<div className="lg:hidden mt-[-60px]">
						<iframe
							width="320"
							height="auto"
							src="https://www.youtube.com/embed/5gOwRpgdzEE"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						></iframe>
					</div>
					<div className="lg:w-1/2 md:w-1/2 w-[90%]">
						<h1 className="text-5xl font-bold">The Best Beaches</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
						<p className="py-4">
							{" "}
							<span className="line-through text-4xl text-slate-300">
								800{" "}
							</span>{" "}
							<span className="text-4xl ml-2"> 500 $</span>{" "}
							<span>/For person</span>
						</p>
						<button className="btn bg-pink-400 rounded-full">Book Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BestBeaches;
