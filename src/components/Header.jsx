import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import {motion} from 'framer-motion';

const Header = () => {
    const [bgImageIndex, setBgImageIndex] = useState(0);
    const [fade, setFade] = useState(false);
    const bgImages = [
        "/estate1.jpg",
        "/estate3.jpg",
        "/estate4.png"
    ];
    useEffect(()=>{
        const interValid = setInterval(()=>{
            setBgImageIndex((prevImg)=> (prevImg+1) % bgImages.length);
        },2000)
        return () => clearInterval(interValid);
    },[bgImages.length]);

  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex justify-center items-center w-full  overflow-hidden' 
    style={{backgroundImage: `url(${bgImages[bgImageIndex]})`}} id='Header'>
    <Navbar/>
    <motion.div 
        initial={{opacity:0, y:100}}
        transition={{duration:1.5}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        className='justify-center text-center mx-auto py-4 px-6 font-semibold '>
        <h1 className='text-5xl rounded text-white'>Explore homes that fit your dreams</h1>
        <div className='space-x-6 mt-16'>
        <a href='#Projects' className='rounded border py-3 px-5 border-white text-white'> Projects</a>
        <a href='#Contacts' className='rounded py-3 px-5  bg-blue-500 text-white'> Contact Us</a>
        </div>
    </motion.div>

    </div>
  )
}

export default Header
