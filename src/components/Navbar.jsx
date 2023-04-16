import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  return (
    <nav className='max-w-full px-12'>
      <div className='relative flex items-center justify-between h-24'>
        <div className='flex items-center flex-shrink-0 text-2xl mr-6'>
          <span className=' text-secondary font-extrabold'>Ajay &nbsp;</span>
          <span className=' text-tertiary font-extrabold'>Arumugam</span>
        </div>

        <div className='flex text-2xl text-[#aaa6c3] mr-32'>
          <a href='#' className='hover:text-tertiary mr-14'>
            About
          </a>
          <a href='#' className='hover:text-tertiary mr-14'>
            Experience
          </a>
          <a href='#' className='hover:text-tertiary mr-14'>
            Projects
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
