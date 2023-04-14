import React from 'react';

const HeroSectionCard = ({ name, logo }) => {
    return (
        <div className='p-2 bg-[white] opacity-50 text-[black] flex flex-col mx-auto w-[100px] h-[120px]'>
            <div>
                <img className='w-[60px] h-auto mx-auto mb-3' src={logo} alt="logo" />
            </div>
            <p className='text-[black] opacity-100 mb-2'>{name}</p>
        </div>
    );
};

export default HeroSectionCard;