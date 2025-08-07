import { Link } from 'react-router-dom'
import lost from '../../public/notfound.webp'

const NotFound = () => {
  return (
    <section className=' section-padding flex md:flex-row flex-col-reverse md:items-center'>
      <div className='md:w-2/5 flex flex-col gap-6'>
         <h1 className='xl:text-9xl lg:text-7xl md:text-5xl text-6xl dark:text-gray-100'>
            404
         </h1>
         <h2 className='xl:text-7xl lg:text-5xl md:text-3xl text-3xl italic dark:text-gray-100'>LOST IN SPACE</h2>
         <p className='xl:text-3xlmd:text-2xl text-xl font-Inter dark:text-gray-100'>
            You have reached the edge of the universe.
            The page you requested could not be found.
            Dont' Worry and return to the previous page.
         </p>
         <Link to='/' className='h-12 bg-yellow-200  dark:bg-yellow-600 w-36 flex justify-center items-center text-xl rounded-md hover:bg-yellow-100 dark:text-gray-100 font-medium hover:text-gray-600 transition-colors'>
         Go to home
         </Link>
      </div>
      <div className='md:w-3/5'>
        <img src={lost} alt="" className='w-full dark:mix-blend-multiply' />
      </div>
    </section>
  )
}

export default NotFound