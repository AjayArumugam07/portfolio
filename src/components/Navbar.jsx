import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'
import { logo, menu, close } from '../../public/assets'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className='max-w-full px-6 lg:px-12'>
      <div className='relative flex items-center justify-between h-24'>
        <div className='flex items-center flex-shrink-0 text-2xl mr-6'>
          <span className=' text-secondary font-extrabold'>Ajay &nbsp;</span>
          <span className=' text-tertiary font-extrabold'>Arumugam</span>
        </div>

        <div className='hidden md:flex text-2xl text-secondary xl:mr-32'>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className='hover:text-tertiary lg:mr-14 mr-7'
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className='md:hidden flex items-center'>
          <button className='mobile-menu-button' onClick={toggleMenu}>
            {isOpen ? (
              <img src={close} alt='Close menu' />
            ) : (
              <img src={menu} alt='Open menu' />
            )}
          </button>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className='mt-4 space-y-4'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                className='block hover:text-tertiary'
                onClick={closeMenu}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
