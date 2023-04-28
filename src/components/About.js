import React from 'react'

import Image from '../assets/img/aboutjoao.jpg'
const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} />

          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 
                    before:content-about relative before:absolute before:opacity-40 before:-top-[2rem]
                    before:hidden before:lg:block'>
                João Konick
              </h2>
              <p className='mb-4 text-accent'>
                Frontend Developer</p>
              <hr className='mb-8 opaciy-5' />
              <p className='mb-8'>
                My name is João Konick, I'm a junior web developer passionate about technology and innovation. Since I started studying programming, I've been looking to improve my skills and knowledge in different areas, such as front-end, back-end and database development.

                During my education, I had the opportunity to work on some challenging projects, which allowed me to develop my problem solving and teamwork skills. I have experience in languages ​​like HTML, CSS, JavaScript, Bootstrap 5 and Python, as well as frameworks like React, Node.js and Mongo DB.

                I believe that technology has great potential to improve people's lives and I am committed to contributing to that goal. I always try to keep up to date with the latest trends and technologies in the market to provide innovative and efficient solutions.

                I am looking for opportunities to grow professionally and contribute to the success of challenging projects. If you are looking for a committed junior web developer with a passion for technology, please get in touch with me.
                <br />
                If you are looking for a committed junior web developer with a passion for technology, please get in touch with me.
              </p>
            </div>
            
              <button className='btn btn-md bg-accent hover:bg-accent-hover transition-all'>
                Contact me
             </button>
            

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
