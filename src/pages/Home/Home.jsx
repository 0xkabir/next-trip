import React from 'react';
import EventsTourCard from '../../components/Cards/EventsTourCard';
import CategorySection from '../CategorySection/CategorySection';
import DiscoverSection from '../DiscoverSection/DiscoverSection';
import NextHoliday from '../NextHoliday/NextHoliday';

const Home = () => {
    return (
        <div>
            {/* Categories */}
            <CategorySection />
            {/* <h1>This is Home Page</h1> */}
            <NextHoliday></NextHoliday>
            {/* Discover Section */}
            <DiscoverSection />
            {/* Event Tour Card */}\
            <EventsTourCard />
        </div>
    );
};

export default Home;