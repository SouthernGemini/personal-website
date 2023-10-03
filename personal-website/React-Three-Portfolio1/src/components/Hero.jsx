import React from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Hero = () => {

    const h1variables = {
        visible: {
            opacity: 1,
            scale: 1,
            transition: { 
                type: 'spring',
                bounce: 0.5,
                stiffness: 100,
                duration: 1,
                delay: 1, 
            },
        },
        hidden: { opacity: 0, scale: 0},
    }
  return (
    <section className="w-screen h-screen mx-auto">
        <div className='absolute left-[5%] top-[7%] xl:left-[3%] mx-auto fredoka-font text-white'>
            <motion.h1 
            variants={h1variables} className='text-4xl lg:text-6xl'>
            Hi, I'm{' '}
            <span className='hover-text-glow light-blue-text font-semibold'>
            Allison{' '}
            </span>{' '}
           
            </motion.h1>
        </div>
    </section>
  )
}
export default Hero