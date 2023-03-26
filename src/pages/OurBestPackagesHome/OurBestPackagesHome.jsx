import React from 'react';
import EventsTourCard from '../../components/Cards/EventsTourCard';

const OurBestPackagesHome = () => {
    return (
        <div className="container mx-auto">
            <div className='lg:text-5xl md:text-3xl text-2xl font-bold text-black text-center my-6'>
                <h2>Our Best Packages</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4">
                <EventsTourCard />
                <EventsTourCard />
                <EventsTourCard />
            </div>
        </div>
    );
};

export default OurBestPackagesHome;