import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardToShow, setCardToShow] = useState(1);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }
    const prevProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1);
    }

    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardToShow(projectsData.length);
            }
            else {
                setCardToShow(1)
            };
        };
        updateCardsToShow();

        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);

    }, []);

    return (
        <div
            className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden'>
                <motion.div
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                >
                     <h1 id='Projects' className='text-2xl sm:4xl mb-2 font-bold text-center'>Projects <span className='underline underline-offset-4 under decoration-1 font-light'>Completed</span></h1>
                     <p className='text-center'>Crafting Spaces, Building Lagacies-Explore Our Portfolio</p>
                </motion.div>

            {/* Slider Buttons */}
            <div className='flex justify-end items-center mb-8'>
                <button onClick={prevProject}
                    className='p-3 bg-gray-200 mr-2 rounded ' aria-label='Previous Project'>
                    <img src={assets.left_arrow} alt="" />
                </button>
                <button onClick={nextProject}
                    className='p-3 bg-gray-200 mr-2 rounded ' aria-label='Next Project'>
                    <img src={assets.right_arrow} alt="" />
                </button>
            </div>
            {/* Project Slider Container */}
            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out'
                    style={{ transform: `translateX(-${(currentIndex * 100) / cardToShow}%)` }}
                >
                    {projectsData.map((project, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            transition={{ duration: 2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            key={index} className='relative flex-shrink-0 w-full sm:w-1/4' > {/* 4 images in 1 row */}
                            <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                                    <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                                    <p className='text-gray-500 text-sm'>
                                        {project.price} <span className='px-1'></span> {project.location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;
