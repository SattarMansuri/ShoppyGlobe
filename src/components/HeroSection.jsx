import { useEffect, useState, useMemo, useRef } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const HeroSection = ({products}) => {
const textRef = useRef();

 useEffect(() => {
    const animate = async () => {
      await document.fonts.ready;
      const split = new SplitText(textRef.current, {
        type: "words",
        wordDelimiter: " "
      });

      gsap.from(split.words, {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power2.out"
      });
    };

    animate();
  }, [])

  // Extract products at index 0, 5, 10, 15, 20, 25 and last
  const specialProducts = useMemo(() => {
    const result = [];
    for (let i = 0; i <= 25; i += 5) {
      if (products[i]) result.push(products[i]);
    }
    const lastItem = products[products.length - 1];
    if (lastItem && !result.includes(lastItem)) {
      result.push(lastItem);
    }
    return result;
  }, [products]);

  return (
    <section className="section-padding">
      <h1  ref={textRef} className="text-center xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-semibold font-Inter italic mb-10 dark:text-gray-100">
        FIND PRODUCTS THAT MATCH YOUR LIFESTYLE
      </h1>

      {specialProducts.length > 0 ? (
        <Swiper
          pagination={{ dynamicBullets: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {specialProducts.map((el) => (
            <SwiperSlide key={el.id}>
            <Link to={`/products/${el.title}`} className="flex justify-center items-center flex-col pb-20">
                <img
                src={el.images[1] || el.images[0]}
                alt={el.title}
                className="lg:h-[550px] md:h-[450px] h-[380px]object-cover object-center rounded-xl"
                />
                <h2 className="xl:text-3xl md:text-2xl text-xl font-Inter font-semibold mb-4 dark:text-gray-100">{el.title}</h2>
                <p className="font-Inter lg:text-xl md:text-lg text-base text-center md:px-4 dark:text-gray-100">{el.description}</p>
            </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-500 mt-10">Loading products...</p>
      )}
    </section>
  );
};

export default HeroSection;
