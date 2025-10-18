import React, { useState } from 'react';
import Links from './Links';
import { Menu, X } from 'lucide-react';

const navigationData = [
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: '/about', name: 'About' },
  { id: 3, path: '/services', name: 'Services' },
  { id: 4, path: '/projects', name: 'Projects' },
  { id: 5, path: '/contact', name: 'Contact' }
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links =  navigationData.map((route) => <Links key={route.id} route={route}></Links>) 
    return (
        <div className='flex justify-between items-center mx-10'>
            <span className='flex' onClick={() => setOpen(!open)}>
                {
                    open?
                    <X className='md:hidden'></X>:
                    <Menu className='md:hidden'></Menu>
                }
                <ul className={`md:hidden absolute duration-1000  text-black ${open ? 'top-8' : '-top-40'} bg-amber-500`}>
                     {links}
                </ul>
            
            
            <h3 className='ml-4'>Navbar</h3>
              </span>
            {/* <ul className='flex '>
                <li className='mr-4' href='/'>Home</li>
                <li className='mr-4' href='/About'>About</li>
                <li className='mr-4' href='/Blog'>Blog</li>

            </ul> */}
            <ul className='md:flex hidden'>
                {links}
            </ul>
            <button>Sign in</button>
        </div>
    );
};

export default Navbar;