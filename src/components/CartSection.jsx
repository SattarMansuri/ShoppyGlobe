import { removeFromCart } from "../store/counterSlice";
import CartCard from "./CartCard";
import { useDispatch, useSelector } from "react-redux";

const CartSection = () => {
  const cartItems = useSelector((state)=> state.counter.cartItems)
  const TotalCartValue = cartItems.reduce((acc, item)=>{
    const originalPrice = item.price / (1 - item.discountPercentage / 100)
    return acc + originalPrice * item.quantity
  }, 0)
  const discountedTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity, 0
  )
  const savings = TotalCartValue - discountedTotal
 const discountPercent = ((TotalCartValue - discountedTotal) / TotalCartValue) * 100;
  return (
    <section className="section-padding ">
      {
        cartItems.length ? <div className="gap-8 justify-between flex lg:flex-row flex-col items-start">
      <div className="flex flex-col gap-3 lg:w-1/2 w-full">
        {cartItems.map(({ id, title, price, images, quantity }) => (
          <CartCard
            key={id}
            id={id}
            title={title}
            price={price}
            image={images[0]}
            quantity={quantity}
          />
        ))}
      </div>
      <div className="flex flex-col gap-5 px-4 py-8 border-2 border-gray-200 rounded-sm shadow-sm lg:w-1/2 w-full dark:border-gray-600">
        <h2 className="xl:text-3xl md:text-2xl text-xl font-Inter font-medium dark:text-gray-100">Order Summary</h2>
        <div className="flex justify-between items-center">
          <span className="xl:text-2xl md:text-xl text-lg font-Inter font-medium dark:text-gray-100">
            Subtotal:
          </span>
          <span className="xl:text-2xl md:text-xl text-lg font-Inter font-medium dark:text-gray-100">
              $ {TotalCartValue.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="xl:text-2xl md:text-xl text-lg font-Inter font-medium dark:text-gray-100">
            Discount Percent:
          </span>
          <span className="xl:text-2xl md:text-xl text-lg font-Inter font-medium dark:text-gray-100">
              {discountPercent.toFixed(2)}%
          </span>
        </div>
           <div className="flex justify-between items-center">
          <span className="xl:text-2xl md:text-xl text-lg font-Inter font-medium dark:text-gray-100">
            You save:
          </span>
          <span className="xl:text-2xl md:text-xl text-lg font-Inter font-medium dark:text-gray-100">
              ${savings.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="xl:text-2xl md:text-xl text-lg font-Inter font-medium  dark:text-gray-100">
            Price after discount:
          </span>
          <span className="xl:text-2xl md:text-xl text-lg font-Inter font-medium dark:text-gray-100">
              ${discountedTotal.toFixed(2)}
          </span>
        </div>
      </div>
      
      </div>
      : 
      <p className="font-Inter lg:text-3xl md:text-2xl text-xl text-center italic font-medium dark:text-gray-100">YOUR CART IS EMPTY</p>
      }
    </section>
  );
};

export default CartSection;
