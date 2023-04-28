import React from 'react'

//import components
import Projects from '../components/Projects'

const Portfolio = () => {
  return (
    <section className='section bg-primary mim-h-[1400px]' id='portfolio'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative
            before:absolute before:opacity-40 before:-top-[2rem]
            before:-left-3/4 before:hidden before:lg:block'>
            My latest work</h2>
          <p className='subtitle'>
            The projects I have carried out show my commitment and my ability to face challenges. <br /> They are a testament to creativity and problem-solving skills. <br />

            Each project was an opportunity to learn and grow, and I'm sure I gained many valuable skills from working on them. <br /> I can be proud of myself for the work I've done and the results I've achieved.<br />

            Now, the important thing is to reflect on what I learned from these projects and how to apply this experience in the future.<br /> I can use these skills and knowledge to tackle new challenges and exciting projects.<br />

            I look forward to seeing what I do next and how I apply my skills to achieve even more success and learning.
          </p>
        </div>
        <Projects />
      </div>
    </section>
  )
}

export default Portfolio
