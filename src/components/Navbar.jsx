import React, { useState } from 'react';
import { navLinks } from '../constants';
import menu from '/menu.svg';
import close from '/close.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className='max-w-full px-2 md:px-6 lg:px-8'>
      <div className='relative flex items-center justify-between h-16 md:h-24'>
        <div className='flex items-center flex-shrink-0 text-lg md:text-2xl mr-2 md:mr-6'>
          <span className='text-secondary font-extrabold'>Ajay &nbsp;</span>
          <span className='text-tertiary font-extrabold'>Arumugam</span>
        </div>

        <div className='hidden md:flex text-base md:text-lg text-secondary'>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className='hover:text-tertiary lg:mr-6 md:mr-4'
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className='md:hidden flex items-center'>
          <button className='mobile-menu-button' onClick={toggleMenu}>
            {isOpen ? (
              <img src={close} alt='Close menu' className='h-6 w-6' />
            ) : (
              <img src={menu} alt='Open menu' className='h-6 w-6' />
            )}
          </button>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className='mt-2 space-y-2 text-base text-secondary'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                className='block hover:text-tertiary py-2'
                onClick={closeMenu}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
