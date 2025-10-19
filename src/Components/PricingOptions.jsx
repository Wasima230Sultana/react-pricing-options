import React, { use } from 'react';
import PricingCard from './PricingCard';
import DaisyPricing from './DaisyPricing';

const PricingOptions = ({ pricingPromise }) => {
    const promiseData = use(pricingPromise);

    // console.log(promiseData)
    return (
        <div>
            <h2 className='text-3xl'>Get our membership</h2>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {/* {
                    promiseData.map((pricing => <PricingCard
                        key={pricing.id}
                        pricing={pricing}
                    ></PricingCard>))
                } */}
                {
                    promiseData.map((pricing) => <DaisyPricing
                    key={pricing.id}
                    pricing = {pricing}
                    ></DaisyPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;