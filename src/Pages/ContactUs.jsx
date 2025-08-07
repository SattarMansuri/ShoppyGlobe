import React from 'react'
import ContactSection from '../components/ContactSection'
import ContactForm from '../components/ContactForm'

const ContactUs = () => {
  return (
    <main className='page-padding dark:bg-gray-900'>
    <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold font-Inter italic xl:mt-10 lg:mt-9 md:mt-8 mt-7 dark:text-gray-100">
        CONTACT US
    </h1> 
    <ContactSection />
    <ContactForm />
    </main>
  )
}

export default ContactUs