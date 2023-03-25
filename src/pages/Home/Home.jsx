import React from 'react';
import BestBeaches from '../BestBeaches/BestBeaches';
import NextHoliday from '../NextHoliday/NextHoliday';
import WorldTour from '../WorldTour/WorldTour';

const Home = () => {
    return (
        <div>
          
        <NextHoliday></NextHoliday>
        <BestBeaches></BestBeaches>
        <WorldTour></WorldTour>
        </div>
    );
};

export default Home;