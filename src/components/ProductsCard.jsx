import React from 'react'
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

const ProductsCard = ({ id, image, title, price, rate}) => {
  return (
    <Link to={`/products/${id}`} className='flex flex-col gap-3 border-2 border-gray-200 p-4 shadow-md hover:scale-105 hover:border-yellow-400 duration-400 ease-in w-full dark:border-gray-600 dark:hover:border-yellow-800'>
      <img src={image} alt="" className='w-full object-cover'/>
      <div className='flex flex-col gap-2'>
        <h4 className='lg:text-xl text-lg font-Inter font-medium whitespace-nowrap overflow-hidden text-ellipsis dark:text-gray-100'>
            {title}
        </h4>
     <StarRatings
      rating={rate}
      starRatedColor="gold"
      numberOfStars={5}
      name="rating"
      starDimension="25px"
      starSpacing="3px"
    />
        <strong className='lg:text-xl text-lg font-Inter font-medium dark:text-gray-100'>
            ${price}
        </strong>
      </div>
    </Link>
  )
}

export default ProductsCard