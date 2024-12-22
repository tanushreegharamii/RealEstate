import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div 
        initial={{opacity:0, x:200}}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
        viewport={{once:true}}
        className='flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
        <p className='text-gray-500 mx-w-80 text-center mb-8'>Passionate About Properties, Dedicated To Your Vision</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <motion.img
             initial={{opacity:0, y:100}}
             transition={{duration:1.5}}
             whileInView={{opacity:1, y:0}}
             viewport={{once:true}}
             src={assets.brand_img} className='w-full sm:w-1/2 max-w-lg ' alt="" />
            <div className='flex  flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-col-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>12+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>20+</p>
                        <p>Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>25+</p>
                        <p>Ongoing Projects</p>
                    </div>
                </div>
                <motion.p
                 initial={{opacity:0, x:100}}
                 transition={{duration:2}}
                 whileInView={{opacity:1, x:0}}
                 viewport={{once:true}}
                 className='my-10 max-w-lg'>Lorem ipsum, Corrupti enim, tempora adipisci numquam animi consequuntur, fuga non nostrum, voluptate distinctio omnis quod amet quo maiores cumque corporis. Doloribus dignissimos placeat nihil architecto, inventore hic alias, cupiditate quae, repudiandae eum quas maiores consectetur quis officiis error maxime nobis et veniam expedita?</motion.p>
                <button className='py-2 px-7 bg-blue-600 text-white rounded'>Learn More</button>
            </div>
        </div>
    </motion.div>
  )
}

export default About
