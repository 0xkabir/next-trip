import React from "react";
import { GiWorld,GiCruiser ,GiTowerBridge} from 'react-icons/gi';

const WorldTour = () => {
	return (
		<div className="w-4/5 mx-auto my-10">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
			<div className="bg-white rounded-md">
				<div className="card-body">
					<div className="flex">
						<div>
                            <GiWorld className="text-5xl mr-3 mt-3 text-slate-400"/>
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
						<div>
                            <GiCruiser className="text-7xl mr-3 mt-3 text-slate-400"/>
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
						<div>
                            <GiTowerBridge className="text-6xl mr-3 mt-3 text-slate-400"/>
                        </div>
						<div>
							<h2 className="card-title text-3xl py-3">Best Tours</h2>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Similique, perferendis.
							</p>
							{/* <div className="card-actions justify-end">
								<button className="btn">Buy Now</button>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
        </div>
	);
};

export default WorldTour;
