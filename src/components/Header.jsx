'use client'
import React, { useEffect, useRef, useState } from 'react'
import Logo from '../../public/icons/Logo'
import { LuShoppingCart } from "react-icons/lu"
import { GiHamburgerMenu } from "react-icons/gi"
import { ImCross } from "react-icons/im"
import { PiMoonFill } from "react-icons/pi";
import { MdWbSunny } from "react-icons/md";
import { Link } from 'react-router-dom'
import { NAV_LINK } from '../utils'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../store/themeSlice'

const Header = React.memo(() => {
  const [menuOpen, setMenuOpen] = useState(false)
  const dispatch = useDispatch()
  const cartItems = useSelector((state)=> state.counter.cartItems.length)
  const dark = useSelector((state)=> state.theme.mode === 'dark')
  const menuRef = useRef()
    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <header className='lg:px-10 lg:py-5 md:px-8 md:py-4 sm:px-6 px-4 py-3 bg-yellow-100 dark:bg-yellow-900 flex flex-col gap-5 relative z-50'>
    
      <div className='flex items-center justify-between'>
        <Link to='/'>
        <Logo className="text-2xl" />
        </Link>

        {/* Desktop Menu */}
        <nav className='lg:flex hidden xl:gap-10 lg:gap-9 md:gap-7'>
         {
            NAV_LINK.map(({id, label, href})=>(
                <Link to={href} key={id} className='relative inline-block font-Inter xl:text-2xl text-xl font-bold text-blue-800 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors cursor-pointer group w-fit'>{label}
            <span className="absolute left-0 -bottom-0.5 h-[2px] bg-current w-0 group-hover:w-full transition-all duration-500"></span>
          </Link>
            ))
         }
        </nav>
           <div className={`relative w-28 h-12 rounded-4xl hidden lg:flex items-center justify-between px-2 ${dark ? 'bg-black':'bg-white'}`}>
            <div className={`absolute rounded-full h-10 w-10 z-0 ${dark ? 'translate-x-14 bg-gray-200' : 'translate-x-[-2px] bg-yellow-200'} transform transition-transform duration-300 ease-in`} />
           <MdWbSunny onClick={()=>dispatch(toggleTheme())} className={`text-2xl cursor-pointer z-10 ml-1.5 ${dark ? 'text-yellow-400' : 'text-black'}`} />
           <PiMoonFill onClick={()=>dispatch(toggleTheme())} className={`text-2xl cursor-pointer z-10 mr-1.5 ${dark ? 'text-gray-400' : 'text-black'}`} />
           </div>
          <Link to='/cart' className='xl:h-12 xl:w-12 h-10 w-10 rounded-full bg-blue-700 dark:bg-blue-400 lg:flex hidden justify-center items-center relative cursor-pointer'>
            <LuShoppingCart className='text-2xl' />
            <span className='absolute -top-2 -right-1 bg-yellow-600 xl:h-6 xl:w-6 xl:text-base h-4.5 w-4.5 text-xs rounded-full flex justify-center items-center xl:pb-0.5'>{cartItems}</span>
          </Link>

        {/* Hamburger Icon (Mobile) */}
        <div onClick={() => setMenuOpen(true)} className='lg:hidden flex h-12 min-w-12 rounded-full bg-yellow-500 dark:bg-yellow-200 justify-center items-center cursor-pointer'>
          <GiHamburgerMenu className='text-2xl' />
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
        />
      )}

      {/* Side Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-yellow-200 dark:bg-yellow-900 z-[999] p-5 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
           <div className={`relative w-28 h-12 rounded-4xl flex items-center justify-between px-2 ${dark ? 'bg-black':'bg-white'}`}>
            <div className={`absolute rounded-full h-10 w-10 z-0 ${dark ? 'translate-x-14 bg-gray-200' : 'translate-x-[-2px] bg-yellow-200'} transform transition-transform duration-300 ease-in`} />
           <MdWbSunny onClick={()=>dispatch(toggleTheme())} className={`text-2xl cursor-pointer z-10 ml-1.5 ${dark ? 'text-yellow-400' : 'text-black'}`} />
           <PiMoonFill onClick={()=>dispatch(toggleTheme())} className={`text-2xl cursor-pointer z-10 mr-1.5 ${dark ? 'text-gray-400' : 'text-black'}`} />
           </div>
       <div onClick={() => setMenuOpen(false)} className='lg:hidden flex h-12 min-w-12 rounded-full bg-yellow-500 dark:bg-yellow-200 justify-center items-center cursor-pointer'>
          <ImCross className='text-2xl' />
        </div>
        </div>
          <Link to='/cart' className='h-12 w-12 rounded-full bg-blue-700 flex justify-center items-center relative cursor-pointer mb-10 dark:bg-blue-400'>
            <LuShoppingCart className='text-2xl' />
            <span className='absolute -top-2 -right-1 bg-yellow-600 h-6 w-6 text-base rounded-full flex justify-center items-center pb-0.5'>{cartItems}</span>
        </Link>
        <div className="flex flex-col gap-5">
          {
        NAV_LINK.map(({id, label, href})=>(
           <Link onClick={() => setMenuOpen(false)} to={href} key={id} className="relative inline-block font-Inter text-xl font-bold text-blue-600 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors cursor-pointer group w-fit">
      {label}
      <span className="absolute left-0 bottom-0 h-[2px] bg-current w-0 group-hover:w-full transition-all duration-500"></span>
        </Link>
        ))
       }
        </div>
      </div>
    </header>
  )
})
export default Header