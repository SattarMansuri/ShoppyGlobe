import React from 'react'
import Logo from '../../public/icons/Logo'
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { NAV_LINK } from '../utils';
import { Link } from 'react-router-dom';


const Footer = () => {
  const footerLinks = [
  { id: 1, label: "Products", href: "/products" },
  { id: 2, label: "FAQ", href: "/faq" },
  { id: 3, label: "About Us", href: "/about" },
  { id: 4, label: "Contact Us", href: "/contact" },
];
  return (
    <footer className='lg:px-10 lg:py-16 md:px-8 md:py-10 sm:px-6 px-4 py-9 bg-yellow-100 dark:bg-yellow-900 flex md:flex-row flex-col justify-between relative'>
     <div className='md:w-1/3 w-full'>
       <Link to='/'>
       <Logo className='text-3xl' />
       </Link>
     </div>
      <div className='flex justify-between md:mt-16 mt-10 flex-wrap gap-10 md:w-2/3 w-full'>
         <div className="flex flex-col gap-5">
         <h2 className='font-Inter lg:text-2xl text-xl font-bold text-yellow-600 dark:text-yellow-400'>Important Links:</h2>
       {
        NAV_LINK.map(({id, label, href})=>(
           <Link to={href} key={id} className="relative inline-block font-Inter lg:text-xl text-lg font-bold text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors cursor-pointer group w-fit">
      {label}
      <span className="absolute left-0 bottom-0 h-[2px] bg-current w-0 group-hover:w-full transition-all duration-500"></span>
        </Link>
        ))
       }
        </div>
         <div className="flex flex-col gap-5">
             <h2 className='font-Inter lg:text-2xl text-xl font-bold text-yellow-600 dark:text-yellow-400'>Our Social Handles:</h2>
          <a href='https://www.facebook.com' target='_blank' className="group relative inline-flex shrink-0 items-center space-x-2 cursor-pointer">
          <FaFacebook className="text-blue-600 xl:text-5xl lg:text-4xl text-3xl" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 xl:text-xl lg:text-lg text-blue-800 font-medium dark:text-blue-400">
           Facebook/ShoppyGlobe
          </span>
         </a>
         <a href='https://www.x.com' target='_blank' className="group relative inline-flex shrink-0 items-center space-x-2 cursor-pointer">
          <FaSquareXTwitter className="text-black xl:text-5xl lg:text-4xl text-3xl" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 xl:text-xl lg:text-lg text-blue-800 font-medium dark:text-blue-400">
           X/ShoppyGlobe
          </span>
         </a>
          <a href='https://www.instagram.com' target='_blank' className="group relative inline-flex shrink-0 items-center space-x-2 cursor-pointer">
          <FaSquareInstagram className="text-red-400 xl:text-5xl lg:text-4xl text-3xl" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 xl:text-xl lg:text-lg text-blue-800 font-medium dark:text-blue-400">
           Instagram/ShoppyGlobe
          </span>
         </a>
         <a href='https://www.youtube.com' target='_blank' className="group relative inline-flex shrink-0 items-center space-x-2 cursor-pointer">
          <FaYoutube className="text-red-600 xl:text-5xl lg:text-4xl text-3xl" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 xl:text-xl lg:text-lg text-blue-800 font-medium dark:text-blue-400">
           Youtube/ShoppyGlobe
          </span>
         </a>
         </div>
      </div>
    </footer>
  )
}

export default Footer