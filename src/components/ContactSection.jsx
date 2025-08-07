
const ContactSection = () => {
  return (
   <section className='section-padding'>
    <h2 className='lg:text-2xl md:text-xl text-lg font-medium font-Inter italic dark:text-gray-100'>
        At ShoppyGlobe, your experience matters to us. Whether you have questions about products, need help with your order, or just want to share feedback — we’re always ready to assist you!
    </h2>
    <div className='xl:mt-20 lg:mt-14 md:mt-10 mt-9'>
        <h3 className='lg:text-3xl md:text-2xl text-xl font-semibold font-Inter italic text-center xl:my-10 lg:my-8 md:my-6 my-5 dark:text-gray-100'>
            Get In Touch
        </h3>
        <div className='flex lg:justify-between justify-center md:flex-row flex-wrap flex-col lg:gap-5 md:gap-10 gap-12 items-center'>
          <div className='h-52 xl:w-96 lg:w-74 sm:w-96 w-full flex flex-col gap-2 justify-center items-center rounded-lg hover:shadow-sm px-4 hover:border-[2.5px] border-gray-200 relative group overflow-hidden dark:border-gray-600'>
            <div className="absolute inset-0 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-blue-100 dark:before:bg-blue-300 before:transition-all before:duration-700 group-hover:before:h-full z-0" />
          <div className="text-5xl z-10">✉️</div>
           <strong className='text-xl font-Inter text-center z-10 dark:text-gray-100'>Email Support</strong>
           <p className='xl:text-xl md:text-lg text-base font-Inter text-center z-10 flex flex-col gap-2 dark:text-gray-100'>
             <a href="mailto:support@shoppyglobe.com" className="text-blue-600 underline text-lg block">
            support@shoppyglobe.com
          </a>
          We respond within 24–48 business hours
           </p>
          </div>
           <div className='h-52 xl:w-96 lg:w-74 sm:w-96 w-full flex flex-col gap-2 justify-center items-center rounded-lg hover:shadow-sm px-4 hover:border-[2.5px] border-gray-200 relative group overflow-hidden dark:border-gray-600'>
            <div className="absolute inset-0 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-blue-100 dark:before:bg-blue-300 before:transition-all before:duration-700 group-hover:before:h-full z-0" />
          <div className="text-5xl z-10">📞</div>
           <strong className='text-xl font-Inter text-center z-10 dark:text-gray-100'>Customer Care Hotline</strong>
           <p className='xl:text-xl md:text-lg text-base font-Inter text-center z-10 flex flex-col gap-2 dark:text-gray-100'>
             <a href="tel:+911234567890" className="text-blue-600 underline text-lg block">
            +91 12345 67890
          </a>
          Mon–Sat, 10:00 AM – 6:00 PM
           </p>
          </div>
           <div className='h-52 xl:w-96 lg:w-74 sm:w-96 w-full flex flex-col gap-2 justify-center items-center rounded-lg hover:shadow-sm p-4 hover:border-[2.5px] border-gray-200 relative group overflow-hidden dark:border-gray-600'>
            <div className="absolute inset-0 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-blue-100 before:transition-all before:duration-700 group-hover:before:h-full z-0 dark:before:bg-blue-300" />
          <div className="text-5xl z-10">🏢</div>
           <strong className='text-xl font-Inter text-center z-10 dark:text-gray-100'>Office Address</strong>
           <p className='xl:text-xl md:text-lg text-base font-Inter text-center z-10 dark:text-gray-100'>
             ShoppyGlobe Pvt. Ltd.<br />
            123, E-commerce Street,<br />
            Bengaluru, India – 560001
           </p>
          </div>
        </div>
    </div>
    
   </section>
  )
}

export default ContactSection