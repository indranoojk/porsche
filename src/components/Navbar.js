import React from 'react'
import logo from  '../assets/porsche-logo.webp'
import logo2 from  '../assets/porsche-logo-2.png'

const Navbar = () => {
  return (
    <div>
        <div className="navbar flex items-center my-2 mx-8">
            <div className='menu flex items-center justify-start cursor-pointer m-5 md:hover:bg-gray-400'>
                <div className='hamburger inline-block cursor-pointer'>
                    <div className="line w-6 h-0.5 my-1 bg-black"></div>
                    <div className="line w-6 h-0.5 my-1 bg-black"></div>
                    <div className="line w-6 h-0.5 my-1 bg-black"></div>
                </div>
                    <div>
                        <span className='menu hidden md:block mx-2'>Menu</span>
                    </div>
            </div>
            <div className='cursor-pointer mx-96'>
                <img className='w-10 md:hidden' src={logo} alt="" />
                <img className='w-48 h-7 hidden md:block' src={logo2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar
