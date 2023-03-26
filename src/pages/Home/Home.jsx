import React from 'react';
import CategorySection from '../CategorySection/CategorySection';
import DiscoverSection from '../DiscoverSection/DiscoverSection';
import BestBeaches from '../BestBeaches/BestBeaches';
import NextHoliday from '../NextHoliday/NextHoliday';
import WorldTour from '../WorldTour/WorldTour';
import OurBestPackagesHome from '../OurBestPackagesHome/OurBestPackagesHome';
import NextFooter from '../../components/shared/NextFooter';

const Home = () => {
    return (
        <div>
            {/* Categories */}
            <CategorySection />
            {/* <h1>This is Home Page</h1> */}
            <NextHoliday></NextHoliday>
            {/* Discover Section */}
            <DiscoverSection />
            {/* Showoff Video Section */}\
            <BestBeaches></BestBeaches>
            {/* <WorldTour></WorldTour> */}
            <WorldTour />
            {/* Our Best Packages Home */}\
            <OurBestPackagesHome />
            {/* Footer Section */}
            {/* <NextFooter /> */}
        </div>
    );
};

export default Home;