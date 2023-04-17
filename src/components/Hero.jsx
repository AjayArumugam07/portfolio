import React from 'react'
import { FaLinkedin, FaGithub, FaFileAlt, FaAngleDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='w-full lg:h-[calc(100vh-12rem)] h-[calc(100vh-6rem)] mx-auto md:mt-[100px]'>
      <div className='px-6 inset-0 max-w-3xl mx-auto flex md:flex-row items-start gap-5 flex-col'>
        <div className='w-1/2 md:w-1/3 mx-auto'>
          <img
            src='/assets/RT4_Ajay_vairavanarumugam_1614_v2 1.png'
            alt='Ajay Arumugam'
            className='rounded-full border border-black bg-black max-w-full h-auto object-contain'
          />
        </div>
        <div className=' md:w-2/3'>
          <div className='text-center md:text-left'>
            <h1 className='font-black text-white sm:text-[50px] text-[40px] lg:leading-[60px] mt-2'>
              Hi, I'm <span className='text-tertiary'>Ajay</span>
            </h1>
            <p className='text-[#dfd9ff] font-medium sm:text-[18px] text-[16px] lg:leading-[30px] mt-2 max-w-full'>
              I'm a software engineer with a knack for solving complex problems
              and a proven track record in Full Stack Web Development, Embedded
              Software, and DevOps.
            </p>
          </div>

          <div className='flex flex-row gap-5 mt-5 justify-center md:justify-start'>
            <a
              href='https://www.linkedin.com/in/ajay-arumugam-209a25198/'
              target='_blank'
              className='items-center gap-2 text-[#dfd9ff] font-medium flex'
            >
              <FaLinkedin className='text-4xl' />
            </a>
            <a
              href='https://github.com/AjayArumugam07'
              target='_blank'
              className='items-center gap-2 text-[#dfd9ff] font-medium flex'
            >
              <FaGithub className='text-4xl' />
            </a>
            <a
              href='https://github.com/AjayArumugam07'
              target='_blank'
              className='items-center gap-2 text-[#dfd9ff] font-medium flex'
            >
              <FaFileAlt className='text-4xl' />
            </a>
          </div>
        </div>
      </div>
      <div className='text-center relative'>
        <p className='text-tertiary font-bold sm:text-[26px] xs:text-[20px] text-[16px] md:mt-36 mt-12'>
          Learn More About Me!
        </p>
        <FaAngleDown className='text-3xl text-secondary animate-bounce mx-auto mt-2' />
      </div>
    </section>
  )
}

export default Hero
