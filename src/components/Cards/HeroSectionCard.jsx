import React from 'react';

const HeroSectionCard = ({ name, logo }) => {
    return (
        <div className='p-2 bg-black opacity-70 text-[aliceblue] flex flex-col mx-auto w-[100px] h-[120px]'>
            <div>
                <img className='w-[60px] h-auto mx-auto mb-3' src={logo} alt="logo" />
            </div>
            <p className='text-[aliceblue] opacity-100 mb-2'>{name}</p>
        </div>
    );
};

export default HeroSectionCard;