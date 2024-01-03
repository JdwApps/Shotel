import React from 'react';
import CTA from './CTA';
import { styleScript } from '../fonts';

const BigText = () => {
    return (
        <div className="h-3/4 w-full py-72  justify-center items-center">
            
            <div className={styleScript.className}>
                <h1 className="text-6xl text-gray-200 text-center">Experience Pristine Nature</h1>
            </div>
            <CTA name='Book Now' />
        </div>
    );
};

export default BigText;
