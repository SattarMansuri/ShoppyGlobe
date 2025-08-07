import axios from "axios";
import { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, addtoCart } from "../store/counterSlice";
import { useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const AboutProduct = () => {
  const [quantity, setQuantity] = useState(1)
  const {id} = useParams()
  const [products, setProducts] = useState({});
  const [image, setImage] = useState(null); 
  const dispatch = useDispatch()
  const increaseCount = () =>{
    setQuantity(prev => prev + 1)
  }
    const decreaseCount = () =>{
    setQuantity(prev => (prev > 1 ? prev - 1 : 1))
  }
  const handleAddItmes = () =>{
    dispatch(addtoCart({...products, quantity}))
    toast.success('Item added to cart successfully')
  }
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProducts(response.data);
        if (response.data.images && response.data.images.length > 0) {
          setImage(response.data.images[0]);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    getData();
  }, []);

  return (
   <>
   <Toaster />
    <section className="section-padding flex lg:flex-row flex-col gap-5">
      <div className="lg:w-2/5 w-full flex sm:flex-row flex-col-reverse gap-6">
        <div className="sm:flex justify-between sm:flex-col grid grid-cols-3 sm:gap-5 gap-3 max-w-full">
          {products?.images?.map((img, index) => (
            <img
              key={index}
              className="sm:h-40  lg:w-full sm:min-w-1/3 border-2 dark:border-gray-600 border-gray-200 shadow-md rounded-xl cursor-pointer sm:object-cover object-center"
              src={img}
              alt=""
              onClick={() => setImage(img)}
            />
          ))}
        </div>
        {image && (
          <img
            className="lg:h-full h-auto object-cover border-2 lg:w-2/3 sm:w-2/3 w-full rounded-xl dark:border-gray-600 border-gray-200 shadow-md"
            src={image}
            alt="Selected"
          />
        )}
      </div>
      <div className="lg:w-3/5 w-full flex flex-col md:gap-5 gap-3">
        <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold font-Inter italic sm:mb-5 mb-2 dark:text-gray-100">{products.title}</h1>
       <div className="flex gap-2 items-center">
          <StarRatings 
        rating={products.rating}
        starRatedColor="gold"
        numberOfStars={5}
        name="rating"
        starDimension="25px"
        starSpacing="3px"
        />
        <strong className="font-Inter text-lg dark:text-gray-100">
          {products.rating}/5
        </strong>
       </div>
       <div className="flex items-center gap-5">
      <ins className="no-underline lg:text-3xl sm:text-2xl text-xl font-Inter font-medium dark:text-gray-100">${products.price}</ins>
      <del className="lg:text-3xl sm:text-2xl text-xl font-Inter font-medium dark:text-gray-100">
        ${(products.price / (1 - products.discountPercentage / 100)).toFixed(2)}
      </del>
      <span className="p-1.5 bg-yellow-200 dark:bg-yellow-600 rounded-sm font-Inter font-medium w-fit sm:text-base text-sm whitespace-nowrap dark:text-gray-100">
        -{products.discountPercentage}% off 
      </span>
       </div>
       <p className="lg:text-2xl text-lg font-Inter font-medium dark:text-gray-100">
        {products.description}
       </p>
       <div className="flex gap-5">
         <div className="flex items-center justify-between px-2 gap-3 lg:w-32 sm:w-28 w-24 py-2 rounded-2xl bg-yellow-200 dark:bg-yellow-600">
            <FaMinus onClick={decreaseCount} className="lg:text-2xl sm:text-xl text-lg cursor-pointer dark:text-gray-100" />
            <span className="lg:text-3xl sm:text-xl text-lg font-Inter dark:text-gray-100">
              {quantity}
            </span>
            <FaPlus onClick={increaseCount} className="lg:text-2xl sm:text-xl text-lg cursor-pointer dark:text-gray-100"/>
         </div>
         <button onClick={handleAddItmes} className="flex items-center bg-yellow-200 dark:bg-yellow-600 dark:text-gray-100 px-3 lg:text-2xl sm:text-xl text-lg font-Inter cursor-pointer rounded-2xl">
          <FaPlus /> Add to Cart
         </button>
       </div>
      </div>
    </section>
    <section className="section-padding flex flex-col md:gap-20 gap-10">
      <h2 className="xl:text-3xl md:text-2xl text-xl font-Inter dark:text-gray-100 text-center font-medium italic">
        REVIEW OF THE PRODUCT
      </h2>
      <div className="lg:grid lg:grid-cols-2 flex flex-col lg:gap-y-8 justify-center items-center gap-5">
      {
       products.reviews && products.reviews.map(({rating, comment, date, reviewerName, reviewerEmail})=>(
          <div key={comment} className="px-3 py-2 flex flex-col gap-2 border-2 max-w-96 rounded-lg border-gray-200 dark:border-gray-600 shadow-sm sm:min-w-[300px] w-full">
          <StarRatings 
        rating={rating}
        starRatedColor="gold"
        numberOfStars={5}
        name="rating"
        starDimension="25px"
        starSpacing="3px"
        />
        <h3 className="font-Inter lg:text-2xl text-xl mt-3 -mb-2 dark:text-gray-100">{reviewerName}</h3>
        <h4 className="font-Inter lg:text-lg text-base break-words dark:text-gray-100">{reviewerEmail}</h4>
        <p className="font-Inter lg:text-xl text-lg dark:text-gray-100">{comment}</p>
         <span className="text-lg font-Inter dark:text-gray-100">{new Date(date).toDateString()}</span>
      </div>
        ))
      }
      </div>
    </section>
   </>
  );
};

export default AboutProduct;
