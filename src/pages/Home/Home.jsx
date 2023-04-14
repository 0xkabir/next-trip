import React from 'react';
import CategorySection from '../CategorySection/CategorySection';
import DiscoverSection from '../DiscoverSection/DiscoverSection';
import BestBeaches from '../BestBeaches/BestBeaches';
import NextHoliday from '../NextHoliday/NextHoliday';
import WorldTour from '../WorldTour/WorldTour';
import OurBestPackagesHome from '../OurBestPackagesHome/OurBestPackagesHome';
import Slider from './Slider';
import Newsletter from '../Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            {/* Slider Section */}
            <Slider />
            {/* Categories */}
            <CategorySection />
            {/* <h1>This is Home Page</h1> */}
            <NextHoliday></NextHoliday>
            {/* Showoff Video Section */}
            <BestBeaches></BestBeaches>
            {/* <WorldTour></WorldTour> */}
            <WorldTour />
            {/* Discover Section */}
            <DiscoverSection />
            {/* Our Best Packages Home */}
            <OurBestPackagesHome />
            {/* Newsletter */}
            <Newsletter />
        </div>
    );
};

export default Home;