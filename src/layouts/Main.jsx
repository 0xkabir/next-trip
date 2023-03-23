import React from 'react';
import { Outlet } from 'react-router-dom';
import NextFooter from '../components/shared/NextFooter';
import NextNav from '../components/shared/NextNav';

const Main = () => {
    return (
        <>
            <NextNav/>
            <Outlet/>
            <NextFooter/>
        </>
    );
};

export default Main;