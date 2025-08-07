import { useEffect, useMemo, useState } from "react";
import FilterSort from "./FilterSort";
import ProductsCard from "./ProductsCard";
import axios from "axios";
import ProductShimmer from "./ProductShimmer";

const ProductsSection = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(2500);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const response = await axios.get("https://dummyjson.com/products");
        setAllProducts(response.data.products);
        setFilteredProducts(response.data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }finally{
        setLoading(false)
      }
    };
    getData();
  }, []);

  const applyFilter = () => {
    const filtered = allProducts.filter(product => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category.toLowerCase());

      const matchesPrice =
        product.price >= minValue && product.price <= maxValue;

      return matchesCategory && matchesPrice;
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    return filteredProducts.slice(start, end);
  }, [currentPage, filteredProducts]);

  const goToPage = (page) => setCurrentPage(page);

  return (
    <section className='section-padding flex lg:flex-row flex-col items-start'>
      <FilterSort
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        applyFilter={applyFilter}
      />
      <div className="flex flex-col lg:pl-5 w-full">
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {
          loading ? 
            Array.from({length:6}).map((_, i)=>(
        <ProductShimmer key={i} />
       ))
          :
          currentProducts.length ? currentProducts.map(({ id, images, title, price, rating }) => (
            <ProductsCard
              key={id}
              id={id}
              image={images[1] || images[0]}
              title={title}
              price={price}
              rate={rating}
            />
          ))
          :
          <p className="xl:text-3xl lg:text-2xl text-xl font-Inter font-medium w-full">No Products available</p>
        }
        </div>
        <div className="flex justify-center gap-2 mt-5">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-3 py-1 rounded border text-lg font-medium cursor-pointer ${
                currentPage === i + 1
                  ? "bg-yellow-400 text-blue-800"
                  : "bg-white text-black"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
