import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '../store/counterSlice';

const CartCard = ({ id, title, image, price, quantity }) => {
   const dispatch = useDispatch()
   const handleRemove = () =>{
    dispatch(removeFromCart(id))
   }
   const handleUpdate = (id, quantity) =>{
    dispatch(updateCartQuantity({id, quantity}))
   }
   const totalPrice = (price * quantity).toFixed(2)
  return (
    <div className='px-4 py-6 flex sm:items-center items-start sm:gap-4 gap-1 sm:h-28 relative  w-full border-2 border-gray-200 rounded-sm shadow-sm hover:border-yellow-200 dark:border-gray-600 dark:hover:border-yellow-600 hover:scale-105 duration-300 h-40'>
      <img src={image} alt={title} className='h-full w-28' />
      <div>
        <h2 className='xl:text-2xl md:text-xl text-lg font-medium sm:pr-0 pr-3 dark:text-gray-100'>{title}</h2>
        <span className='xl:text-2xl md:text-xl text-lg font-medium dark:text-gray-100'>${totalPrice}</span>
      </div>
      <MdDelete
        onClick={handleRemove}
        className='absolute right-2 top-2 text-2xl text-red-600 cursor-pointer'
      />
      <div className="flex items-center justify-between px-2 gap-3 lg:w-28 w-24 py-1 rounded-2xl bg-yellow-200 absolute right-2 bottom-2 dark:bg-yellow-600">
       <FaMinus onClick={()=> quantity > 1 && handleUpdate(id, quantity - 1)} className="lg:text-xl text-lg cursor-pointer dark:text-gray-100" />
       <span className="lg:text-xl text-lg font-Inter dark:text-gray-100">
                   {quantity}
        </span>
       <FaPlus onClick={()=>handleUpdate(id, quantity + 1)} className="lg:text-xl text-lg cursor-pointer dark:text-gray-100"/>
      </div>
    </div>
  );
};

export default CartCard;
