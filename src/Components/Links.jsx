import React from 'react';

const Links = ({route}) => {
    return (
            <li className='px-4 hover:bg-amber-100' href='{route.path}'>{route.name}</li>
        
    );
};

export default Links;