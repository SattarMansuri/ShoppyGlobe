import React from 'react'
import { ABOUT_US } from '../utils'

const About = () => {
  return (
   <main className='page-padding flex flex-col xl:gap-14 lg:gap-12 md:gap-10 gap-8 dark:bg-gray-900'>
     <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold font-Inter italic xl:mt-10 lg:mt-9 md:mt-8 mt-7 lg:mb-2 xl:mb-6 dark:text-gray-100">
        ABOUT US
    </h1> 
   {
    ABOUT_US.map(({id, heading, icon, content})=>(
       <section key={id} className='flex flex-col gap-3'>
         <h2 className='lg:text-3xl md:text-2xl text-xl font-semibold font-Inter italic flex gap-2 dark:text-gray-100'>
          <span>{icon}</span> {heading}
         </h2>
         <p className='lg:text-xl md:text-lg text-base font-Inter font-medium dark:text-gray-100'>
           {content}
         </p>
    </section>
    ))
   }
   </main>
  )
}

export default About