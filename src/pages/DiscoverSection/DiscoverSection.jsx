import React from 'react';
import { Link } from 'react-router-dom';

const DiscoverSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full py-10">
        {/* Discover Nature */}
        <div className="relative group opacity-100 flex justify-center items-center h-full w-full">
            <img className="object-center object-cover h-[280px] w-full overflow-hidden" src="https://assets3.thrillist.com/v1/image/3109501/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70" alt="shoe-image" />
            <div className="dark:text-white text-center z-10 absolute leading-none text-gray-800 py-3 w-72">
                <h3 className='pb-1 text-4xl font-bold mb-12 text-white'>Discover Cities</h3>
                <Link className='rounded-full px-6 py-3 bg-white text-[orange] hover:text-[orange] text-md'>DETAILS</Link>
            </div>
        </div>

        {/* Discover Nature */}
        <div className="relative group opacity-90 flex justify-center items-center h-full w-full">
            <img className="object-center  object-cover h-[280px] w-full overflow-hidden" src="https://images4.alphacoders.com/103/1032233.jpg" alt="shoe-image" />
            <div className="dark:text-white text-center z-10 absolute leading-none text-gray-800 py-3 w-72">
                <h3 className='pb-1 text-4xl font-bold mb-12 text-white'>Discover Nature</h3>
                <Link className='rounded-full px-6 py-3 bg-white text-[#a3e635] hover:text-[#a3e635] text-md'>DETAILS</Link>
            </div>
        </div>
    </div>
);

export default DiscoverSection;