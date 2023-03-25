import React from 'react';
import BestBeaches from '../BestBeaches/BestBeaches';
import NextHoliday from '../NextHoliday/NextHoliday';
import WorldTour from '../WorldTour/WorldTour';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
        <Slider/>
        <NextHoliday></NextHoliday>
        <BestBeaches></BestBeaches>
        <WorldTour></WorldTour>
        </div>
    );
};

export default Home;