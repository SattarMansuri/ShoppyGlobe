import { useEffect, useState } from 'react';
import Brands from '../components/Brands'
import HeroSection from '../components/HeroSection'
import TopSelling from '../components/TopSelling'
import axios from 'axios';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)

useEffect(() => {
  const getData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  getData();
}, []);

  return (
    <main className='page-padding dark:bg-gray-900'>
        <HeroSection products={products} />
        <Brands />
        <TopSelling products={products} loading={loading}/>
    </main>
  )
}

export default Home