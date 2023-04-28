import React from 'react'

//import services data
import {services} from '../data'

const Services = () => {
  return (
    <section id='services' className='section bg-tertiary'>
      <div className='container mx-auto'>
        {/* title */}
        <div className='flex flex-col items-center text-center'>
            <h2 className='section-title before:content-services 
            relative before:absolute before:opacity-40 before:-top-[2rem]
            before:-left-28 before:hidden before:lg:block'>
                What I do for clients
            </h2>
            <p className='subtitle'>
            cached modules 2.35 MiB (javascript) 6.5 MiB (asset) [cached] 727 modules
            runtime modules 28.5 KiB 14 modules
            javascript modules 30.5 KiB
            </p>
        </div>
        {/* item grid */}
        <div className='grid lg:grid-cols-4 gap-8'>
            {services.map((services, index)=>{
                const {icon, name, description} = services;
                return <div className='bg-secondary p-6 rounded-2xl' key={index}>
                    {/*  icon */}
                    <div className='text-accent rounded-sm w-12 h12 flex justify-center
                    items-center mb-24 text-[28px]'>
                        {icon}
                    </div>
                    <h4 className='text-xl font-medium mb-2'>{name}</h4>
                    <p>{description}</p>
                </div>
            })}
        </div>
      </div>
    </section>
  )
}

export default Services
