import React from 'react'
import ProductsCard from './ProductsCard'
import ProductShimmer from './ProductShimmer'

const TopSelling = ({products, loading}) => {
  return (
    <section className='section-padding'>
      <h1 className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold font-Inter italic xl:mt-10 lg:mt-9 md:mt-8 mt-7 dark:text-gray-100">
       TOP SELLING PRODUCTS
      </h1>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-10'>
       {
       loading ? 
       Array.from({length:6}).map((_, i)=>(
        <ProductShimmer key={i} />
       ))
       :
        products.filter((el)=>el.rating > 4).map(({ id, images, title, price, rating })=>(
              <ProductsCard
              key={id}
              id={id}
              image={images[1] || images[0]}
              title={title}
              price={price}
              rate={rating}
            />
        ))
       }
      </div>
    </section>
  )
}

export default TopSelling