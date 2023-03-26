import React from "react";

const WorldTour = () => {
	return (
		// <div className="w-4/5 mx-auto mt-20 mb-10">
        //     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
		// 	<div className="bg-white rounded-md">
		// 		<div className="card-body">
		// 			<div className="flex">
		// 				<div>
        //                     <GiWorld className="text-5xl mr-3 mt-3 text-slate-400"/>
        //                 </div>
		// 				<div>
		// 					<h2 className="card-title text-3xl py-3">World Tour</h2>
		// 					<p>
		// 						Lorem ipsum dolor sit, amet consectetur adipisicing elit.
		// 						Similique, perferendis.
		// 					</p>
		// 				</div>	
		<div className="lg:w-[80%] w-[90%] mx-auto my-5">
			<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
				<div className="bg-white rounded-md">
					<div className="card-body">
						<div className="flex">
							<div className="mt-4 mr-3">
								<img className="w-[140px]" src="https://cdn-icons-png.flaticon.com/512/3943/3943319.png" alt="" />
							</div>
							<div>
								<h2 className="card-title text-3xl py-3">World Tour</h2>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Similique, perferendis.
								</p>

							</div>
						</div>
					</div>
				</div>
				<div className=" bg-white rounded-md">
					<div className="card-body">
						<div className="flex">
							<div className="mt-4 mr-3">
								<img className="w-[140px]" src="https://cdn-icons-png.flaticon.com/512/5452/5452393.png" alt="" />
							</div>
							<div>
								<h2 className="card-title text-3xl py-3">Cruises</h2>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Similique, perferendis.
								</p>

							</div>
						</div>
					</div>
				</div>
				<div className=" bg-white rounded-md">
					<div className="card-body">
						<div className="flex">
							<div className="mt-4 mr-3">
								<img className="w-[140px]" src="https://cdn-icons-png.flaticon.com/512/2697/2697612.png" alt="" />
							</div>
							<div>
								<h2 className="card-title text-3xl py-3">Best Tours</h2>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Similique, perferendis.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorldTour;
