const About = () => {
    return <section className="relative w-screen h-screen mt-20">
        <Motion.div
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={aboutVariants}
        >

        </Motion.div>
    </section>
}

export default About