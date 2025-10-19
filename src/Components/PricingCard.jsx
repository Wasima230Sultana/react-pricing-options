import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {
    const {name, price, duration, features} = pricing;
    console.log(pricing)
    return (
     
        <div className='border bg-amber-600 rounded-lg p-5'>
            {/* card header  */}
            <div >
                <h2 className='text-7xl'>{name}</h2>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            {/* card body  */}
            <div className='bg-amber-400 p-4 rounded-2xl mt-10'>
                <p>{duration}</p>
                {
                    features.map(((feature,index) => <PricingFeatures
                    key={index} feature={feature}
                    ></PricingFeatures>))
                }
            </div>
        </div>

       
    );
};

export default PricingCard;