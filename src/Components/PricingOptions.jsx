import React, { use } from 'react';

const PricingOptions = ({pricingPromise}) => {
    const promiseData = use(pricingPromise);
    console.log(promiseData)
    return (
        <div>
            
        </div>
    );
};

export default PricingOptions;