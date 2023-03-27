import React from 'react';
import { Link } from 'react-router-dom';

const CategorySection = () => {
    return (
        <div className='p-8'>
            <div className='mx-auto w-[80%] text-center'>
                <div>
                    <p className='text-gray-500 mt-16 mb-4'>OUR PROPOSALS</p>
                    <h2 className='text-gray-700 text-4xl font-bold capitalize my-4'>OUR <span className='underline text-cyan-500'>DESTINATIONS</span></h2>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="2xl:mx-auto 2xl:container pb-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                    <div className="flex flex-col justify-center items-center space-y-6">
                        <div className="flex flex-col justify-center items-center ">
                            {/* <h1 className="text-3xl xl:text-3xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white my-4">Shop By Category</h1> */}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 gap-6 w-full">
                            {/*Category Beach */}
                            <div className="shadow-md duration-500 hover:scale-105 hover:shadow-xl relative group opacity-90 flex justify-center items-center h-full w-full">
                                <img className="object-center object-cover h-[400px] w-full" src="https://www.holidify.com/images/bgImages/BALI.jpg" alt="shoe-image" />
                                <div className="dark:text-white left-8 bottom-4 z-10 absolute leading-none text-gray-800 py-3 w-36">
                                    <h3 className='font-bold pb-1 text-2xl'>Nature</h3>
                                    <p className='text-lg'>6 Packages</p>
                                </div>

                                {/* Hover Details */}
                                <div className="absolute opacity-0 group-hover:opacity-100  group-hover:divider-cyan-300 transition duration-700 bottom-3 py-6 z-0 px-20 w-36"></div>
                                <div className="absolute h-full w-full flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 z-20 group-hover:bg-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                    <h3 className="text-white text-2xl font-semibold py-4 px-5">Packages</h3>
                                    <p className='text-sm mb-1 text-white'>Shimla</p>
                                    <p className='text-sm mb-1 text-white'>Maldives</p>
                                    <p className='text-sm mb-1 text-white'>Cappadocia</p>
                                    <p className='text-sm mb-1 text-white'>Avenue of the Baobabs</p>
                                    <p className='text-sm mb-1 text-white'>Arashiyama Bamboo Grove</p>
                                    <p className='text-sm mb-1 text-white'>Torres Del Paine National Park</p>
                                    <Link to='/productDetails' className="bg-white mt-4 hover:text-cyan-500 text-cyan-500 text-[12px] rounded-3xl py-2 px-5">VIEW DESTINATIONS</Link>
                                </div>
                            </div>
                            {/* Category Desert */}
                            <div className="shadow-md duration-500 hover:scale-105 hover:shadow-xl relative group opacity-90 flex justify-center items-center h-full w-full">
                                <img className="object-center object-cover h-[400px] w-full" src="https://guardian.ng/wp-content/uploads/2018/04/Photo_-Art-of-Safari.jpg" alt="watch-image" />
                                <div className="dark:text-white left-8 bottom-4 z-10 absolute leading-none text-gray-800 py-3 w-36">
                                    <h3 className='font-bold pb-1 text-2xl'>Desert</h3>
                                    <p className='text-lg'>2 Packages</p>
                                </div>

                                {/* Hover Details */}
                                <div className="absolute opacity-0 group-hover:opacity-100  group-hover:divider-cyan-300 transition duration-700 bottom-3 py-6 z-0 px-20 w-36"></div>
                                <div className="absolute h-full w-full flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 z-20 group-hover:bg-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                    <h3 className="text-white text-2xl font-semibold py-4 px-5">Packages</h3>
                                    <p className='text-sm mb-1 text-white'>Sossusvlei, Namibia</p>
                                    <p className='text-sm mb-1 text-white'>Pyramids of Giza</p>
                                    <Link to='/productDetails' className="bg-white mt-4 hover:text-cyan-500 text-cyan-500 text-[12px] rounded-3xl py-2 px-5">VIEW DESTINATIONS</Link>
                                </div>
                            </div>
                            {/* Category Historical Places */}
                            <div className="shadow-md duration-500 hover:scale-105 hover:shadow-xl relative group opacity-90 flex justify-center items-center h-full w-full">
                                <img className="object-center object-cover h-[400px] w-full" src="https://www.deutschland.de/sites/default/files/media/image/AdobeStock_99698574.jpg" alt="watch-image" />
                                <div className="dark:text-white left-8 bottom-4 z-10 absolute leading-none text-gray-800 py-3 w-36">
                                    <h3 className='font-bold pb-1 text-2xl'>Historical Places</h3>
                                    <p className='text-lg'>3 Packages</p>
                                </div>

                                {/* Hover Details */}
                                <div className="absolute opacity-0 group-hover:opacity-100  group-hover:divider-cyan-300 transition duration-700 bottom-3 py-6 z-0 px-20 w-36"></div>
                                <div className="absolute h-full w-full flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 z-20 group-hover:bg-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                    <h3 className="text-white text-2xl font-semibold py-4 px-5">Packages</h3>
                                    <p className='text-sm mb-1 text-white'>Bali</p>
                                    <p className='text-sm mb-1 text-white'>Angkor Wat</p>
                                    <p className='text-sm mb-1 text-white'>Machu Pichu</p>
                                    <Link to='/productDetails' className="bg-white mt-4 hover:text-cyan-500 text-cyan-500 text-[12px] rounded-3xl py-2 px-5">VIEW DESTINATIONS</Link>
                                </div>
                            </div>
                            {/* Category Nature */}
                            <div className="shadow-md duration-500 hover:scale-105 hover:shadow-xl relative group opacity-90 flex justify-center items-center h-full w-full">
                                <img className="object-center object-cover h-[400px] w-full" src="https://www.holidify.com/images/bgImages/KOH-YAO-NOI.jpg" alt="shoe-image" />
                                <div className="dark:text-white left-8 bottom-4 z-10 absolute leading-none text-gray-800 py-3 w-36">
                                    <h3 className='font-bold pb-1 text-2xl'>Islands</h3>
                                    <p className='text-lg'>5 Packages</p>
                                </div>

                                {/* Hover Details */}
                                <div className="absolute opacity-0 group-hover:opacity-100  group-hover:divider-cyan-300 transition duration-700 bottom-3 py-6 z-0 px-20 w-36"></div>
                                <div className="absolute h-full w-full flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 z-20 group-hover:bg-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                    <h3 className="text-white text-2xl font-semibold py-4 px-5">Packages</h3>
                                    <p className='text-sm mb-1 text-white'>Maldives</p>
                                    <p className='text-sm mb-1 text-white'>Bora Bora</p>
                                    <p className='text-sm mb-1 text-white'>Koh Yao Nai</p>
                                    <p className='text-sm mb-1 text-white'>Phi Phi Islands</p>
                                    <p className='text-sm mb-1 text-white'>Raja Ampat Islands</p>
                                    <Link to='/productDetails' className="bg-white mt-4 hover:text-cyan-500 text-cyan-500 text-[12px] rounded-3xl py-2 px-5">VIEW DESTINATIONS</Link>
                                </div>
                            </div>
                            {/* Category Cave */}
                            <div className="shadow-md duration-500 hover:scale-105 hover:shadow-xl relative group opacity-90 flex justify-center items-center h-full w-full">
                                <img className="object-center object-cover h-[400px] w-full" src="https://adventures.is/media/226921/anaconda-ice-cave-tunnel-vatnajokull.jpg" alt="watch-image" />
                                <div className="dark:text-white left-8 bottom-4 z-10 absolute leading-none text-gray-800 py-3 w-36">
                                    <h3 className='font-bold pb-1 text-2xl'>Caves & Valleys</h3>
                                    <p className='text-lg'>4 Packages</p>
                                </div>

                                {/* Hover Details */}
                                <div className="absolute opacity-0 group-hover:opacity-100  group-hover:divider-cyan-300 transition duration-700 bottom-3 py-6 z-0 px-20 w-36"></div>
                                <div className="absolute h-full w-full flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 z-20 group-hover:bg-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                    <h3 className="text-white text-2xl font-semibold py-4 px-5">Packages</h3>
                                    <p className='text-sm mb-1 text-white'>Antelope Canyon</p>
                                    <p className='text-sm mb-1 text-white'>Geiranger Fjord</p>
                                    <p className='text-sm mb-1 text-white'>Vatnajokull Ice Caves</p>
                                    <p className='text-sm mb-1 text-white'>Torres Del Paine National Park</p>
                                    <Link to='/productDetails' className="bg-white mt-4 hover:text-cyan-500 text-cyan-500 text-[12px] rounded-3xl py-2 px-5">VIEW DESTINATIONS</Link>
                                </div>
                            </div>
                            {/* Category Valley */}
                            <div className="shadow-md duration-500 hover:scale-105 hover:shadow-xl relative group opacity-90 flex justify-center items-center h-full w-full">
                                <img className="object-center object-cover h-[400px] w-full" src="https://res.cloudinary.com/simpleview/image/upload/v1674650667/clients/norway/New_Project_11__28f603e7-fce9-4bb3-96ec-8500d66f86f1.jpg" alt="shoe-image" />
                                <div className="dark:text-white left-8 bottom-4 z-10 absolute leading-none text-gray-800 py-3 w-36">
                                    <h3 className='font-bold pb-1 text-2xl'>Water Falls</h3>
                                    <p className='text-lg'>3 Packages</p>
                                </div>

                                {/* Hover Details */}
                                <div className="absolute opacity-0 group-hover:opacity-100  group-hover:divider-cyan-300 transition duration-700 bottom-3 py-6 z-0 px-20 w-36"></div>
                                <div className="absolute h-full w-full flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 z-20 group-hover:bg-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                    <h3 className="text-white text-2xl font-semibold py-4 px-5">Packages</h3>
                                    <p className='text-sm mb-1 text-white'>Victoria Falls</p>
                                    <p className='text-sm mb-1 text-white'>Niagara Falls</p>
                                    <p className='text-sm mb-1 text-white'>Vatnajokull Ice Caves</p>
                                    <Link to='/productDetails' className="bg-white mt-4 hover:text-cyan-500 text-cyan-500 text-[12px] rounded-3xl py-2 px-5">VIEW DESTINATIONS</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategorySection;