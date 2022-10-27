import React from 'react'
import zuriLogo from './assets/Footer/Zuri.Internship_Logo.svg'
import i4gLogo from './assets/Footer/I4G.svg'

const Footer = () => {
  return (
     <footer className='mt-20 mx-6 space-y-4 border-t py-8 md:py-14 md:flex md:space-y-0 md:align-middle md:justify-between md:mx-14  '>
        <img src={zuriLogo} alt="" />
        <p className='text-left text-[#667085]'>HNG Internship 9 Frontend Task</p>
        <img src={i4gLogo} alt="" />
    </footer>
  )
}

export default Footer