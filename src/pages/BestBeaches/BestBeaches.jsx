import React from "react";

import img from "../../assets/images/beach.jpg";
const BestBeaches = () => {
	return (
		<div className="my-14">
			<div className="hero">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="w-1/2">
						<img src={img} className="rounded-lg shadow-2xl" />
					</div>
					<div className="w-1/2">
						<h1 className="text-5xl font-bold">The Best Beaches</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi.
						</p>
                        <p className="py-4"> <span className="line-through text-4xl text-slate-300">800 </span> <span className="text-4xl ml-2"> 500 $</span> <span>/For person</span></p>
						<button className="btn bg-pink-400 rounded-full">Book Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BestBeaches;
