import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import logoi from '../assets/logoi.png'
import { Link } from 'react-router-dom';
import Register from '../assets/Register';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // disable the website scrolling in mobile phone
  useEffect(()=>{
    if(showMenu){
      document.body.style.overflow = "hidden";
    }
    else{
      document.body.style.overflow = "auto";
    }
    return ()=> {
      document.body.style.overflow = "auto" // if we directly switch mob to desktop then it will still hide the scrolling to avoid it use return statement.
    }
  },[showMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <div className=''><img className='h-10 w-10' src={logoi} alt="" />
        <p className='text-white text-center'>RealEstate</p>
        </div>
        <ul className='hidden md:flex gap-7 text-white '>
            <a href="#Header" className='cursor-pointer hover:text-gray-400' >Home</a>
            <a href="#About" className='cursor-pointer hover:text-gray-400' >About</a>
            <a href="#Projects" className='cursor-pointer hover:text-gray-400' >Projects</a>
            <a href="#Testimonials" className='cursor-pointer hover:text-gray-400' >Testimonials</a>
        </ul>
        <a href="#signup"><button className='hidden md:block bg-white px-8 py-2 rounded text-black'>Sign up</button></a>
        <img src={assets.menu_icon} onClick={()=>setShowMenu(true)} className='md:hidden block w-7' alt="" />
      </div>
      {/* ------------------------Mobile Screen Menu----------------------- */}
      <div className={`md:hidden lg:hidden ${showMenu ? ' h-full w-full' : 'h-0 w-0'} fixed right-0 top-0 b-0 overflow-hidden bg-white transition-all ease-in-out `}>
        <div className='flex justify-end p-6'>
          <img src={assets.cross_icon} onClick={()=>setShowMenu(false)} className='w-6 cursor-pointer' alt="" />
        </div>
        <ul className='flex flex-col cursor-pointer items-center gap-2 mt-5 text-lg font-medium'>
          <a onClick={()=>setShowMenu(false)} href="#Home" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={()=>setShowMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={()=>setShowMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
          <a onClick={()=>setShowMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
