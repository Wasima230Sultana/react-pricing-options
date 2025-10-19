import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PricingFeatures = ({feature}) => {
    return (
        <div>
            <p className='flex mt-4'><CircleCheckBig className='mr-3'></CircleCheckBig >  {feature}</p>
         
        </div>
    );
};

export default PricingFeatures;