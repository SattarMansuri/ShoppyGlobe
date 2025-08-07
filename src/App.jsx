import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { lazy, Suspense, useEffect } from "react";
import AppLayout from './Pages/AppLayout';
import NotFoundPage from "./Pages/NotFoundPage";
import Fallback from "./components/Fallback";
import { useSelector } from "react-redux";
const Home = lazy(() => import("./Pages/Home"));
const ProductDetail = lazy(() => import("./Pages/ProductDetail"));
const FAQ = lazy(() => import("./Pages/FAQ"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const CartPage = lazy(() => import("./Pages/CartPage"));
const AllProducts = lazy(() => import("./Pages/AllProducts"));
const NotFound = lazy(() => import("./Pages/NotFoundPage"));


function App() {
    const mode = useSelector ((state) => state.theme.mode);
  useEffect(() => {
    const html = document.documentElement;
    if (mode === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [mode]);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: (
               <Suspense fallback={<Fallback />}>
              <Home />
            </Suspense>
          )
        },
         {
          path: '/products/:id',
          element: (
            <Suspense fallback={<Fallback />}>
              <ProductDetail />
            </Suspense>
          )
        },
         {
          path: "/faq",
          element: (
            <Suspense fallback={<Fallback />}>
              <FAQ />
            </Suspense>
          )
        },
         {
          path: "/aboutus",
          element: (
            <Suspense fallback={<Fallback />}>
              <AboutUs />
            </Suspense>
          )
        },
         {
          path: "/contactus",
          element: (
            <Suspense fallback={<Fallback />}>
              <ContactUs />
            </Suspense>
          )
        },
         {
          path: "/cart",
          element: (
            <Suspense fallback={<Fallback />}>
              <CartPage />
            </Suspense>
          )
        },
        {
          path: "/allproducts",
          element: (
            <Suspense fallback={<Fallback />}>
              <AllProducts />
            </Suspense>
          )
        },
         {
          path: "*",
          element: (
            <Suspense fallback={<Fallback />}>
              <NotFoundPage />
            </Suspense>
          )
        }
      ]
    }
  ])
  return (
     <RouterProvider router={router} />
  )
}

export default App
