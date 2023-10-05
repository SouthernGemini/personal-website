import React from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TypeAnimation } from 'react-type-animation'
import { useEffect } from 'react'

const Hero = () => {
    const isMobile = window.innerWidth <= 767
    const delayTime = isMobile ? 4.8 : 1.8

    const h1variables = {
        visible: {
            opacity: 1,
            scale: 1,
            transition: { 
                type: 'spring',
                bounce: 0.5,
                stiffness: 100,
                duration: 1,
                delay: delayTime, 
            },
        },
        hidden: { opacity: 0, scale: 0},
    }
    const h2variables = {
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: 'spring',
                bounce: 0.5,
                stiffness: 100,
                duration: 1,
                delay: delayTime + 0.5,
            },
        },
        hidden: { opacity: 0, scale: 0 },
    }

        const controls = useAnimation()
        const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

  return (
    <section className="w-screen h-screen mx-auto">
        <div className='absolute left-[5%] top-[7%] xl:left-[3%] mx-auto fredoka-font text-white'>
            <motion.h1
                ref={ref}
                animate={controls}
                initial='hidden'
                variants={h1variables} className='text-4xl lg:text-6xl'>
                Hi, I'm{' '}
                <span className='hover-text-glow light-blue-text font-semibold'>
                    Allison{' '}
                </span>{' '}
            </motion.h1>
            <motion.h2
                  ref={ref}
                  animate={controls}
                  initial='hidden'
                  variants={h2variables} className='text-4xl lg:text-6xl'>
              <TypeAnimation
                  sequence={[
                      // Same substring at the start will only be typed out once, initially
                      'Senior Technical Recruiter',
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      'Freelance Web Developer',
                      1000,
                      'Digital Artist',
                      1000,
                      'Mentor | Coach | Trainer',
                      1000
                  ]}
                  wrapper="span"
                  speed={40}
                  style={{ fontSize: '0.6em', display: 'inline-block' }}
                  repeat={Infinity}
              />
              </motion.h2>
        </div>
        <div className='absolute flex flex-col bottom-[13%] left-[50%] translate-x-[-50%]'>
            <div className='slide-bottom'>
                <div className='down-arrow'></div>
                <div className='down-arrow'></div>
                <div className='down-arrow'></div>
            </div>
        </div>
    </section>
  )
}
export default Hero