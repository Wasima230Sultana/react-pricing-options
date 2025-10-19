import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingOptions = ({pricingPromise}) => {
    const promiseData = use(pricingPromise);
    // console.log(promiseData)
    return (
        <div>
            <h2 className='text-3xl'>Get our membership</h2>
            <div>
                {
                    promiseData.map((pricing => <PricingCard
                    key={pricing.id}
                         pricing={pricing}></PricingCard>))
                }
            </div>
        </div>
    );
};

export default PricingOptions;