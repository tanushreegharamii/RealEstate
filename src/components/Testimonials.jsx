import React from 'react'
import { assets, testimonialsData } from '../assets/assets';
import {motion} from 'framer-motion';

const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='container  mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer<span className='underline underline-offset-4 decoration-1 under font-light '>Testimonials</span></h1>
            <p className='text-center  text-gray-500 mb-12 '>Real Stories From Those Who Found Home With Us</p>

            <div className='flex flex-col md:flex-row lg:flex-row items-center justify-center gap-8'>
                {
                    testimonialsData.map((person, index) => (
                        <div className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center' key={index} >
                            <img src={person.image} className='w-20 h-20 rounded mx-auto mb-4' alt="" />
                            <p className='text-xl text-gray-500 mb-4 '>{person.title}</p>
                            <p className='text-xl text-gray-700 font-medium'>{person.name}</p>
                            <div className='flex justify-center gap-1 text-red-500 mb-4'>
                                {
                                    Array.from({ length: person.rating }, (item, index) => (
                                        <img key={index} src={assets.star_icon} className='' alt='' />
                                    ))
                                }
                            </div>
                            <p className='text-gray-600'>{person.text}</p>
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Testimonials
