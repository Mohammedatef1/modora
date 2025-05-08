import { TProduct } from "@customTypes/product";
import { useAppSelector } from "@store/hooks";
import { useEffect, useRef, useState } from "react";
import { supabase } from "src/db/supabase";
import SwiperInstance from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../eCommerce/ProductCard";
import ArrowButton from "./ArrowButton";
import Tabs from "./Tabs";
import MaxWidthWrapper from "./MaxWidthWrapper";

const BestSellingProducts = ({ tabs }: {tabs: string[]}) => {
  const swiperRef = useRef<SwiperInstance|null>(null)
  const [products, setProducts] = useState<TProduct[]>([])
  const [activeProducts, setActiveProducts] = useState<TProduct[]>([])
  const [activeTab, setActiveTab] = useState(tabs[0])

  const {productsIds: likedProducts} = useAppSelector(state => state.wishlist)
  const {accessToken} = useAppSelector(state => state.auth)
  const {items: cartItems} = useAppSelector(state => state.cart)

  useEffect(() => {
    const getTabsProducts = async() => {
      const {data, error} = await supabase.from('products').select("*");

      if (error) return []

      setProducts(data)
    }

    getTabsProducts()
  }, [])

  useEffect(() => {
    const filteredProducts = products.filter(product => product.cat_prefix.toLowerCase() == activeTab.toLowerCase());
    setActiveProducts(filteredProducts);
  }, [products, activeTab])

  return (
    <div className="bg-light-gray-100">
      <MaxWidthWrapper className="py-12 flex flex-col items-center">
        <h2 className="mb-8 text-3xl md:text-4xl font-bold text-center">Best Selling Products</h2>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs}/>
        <div className="swiperProducts mt-20 mb-16 w-full">
          <Swiper 
            onSwiper={(swiper) => swiperRef.current = swiper}
            slidesPerView={2}
            spaceBetween={10}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 },
              660: { slidesPerView: 3, spaceBetween: 20 },
              1280: {slidesPerView: 4, spaceBetween: 40}
            }}
          >
            {activeProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={{
                  ...product,      
                  quantity: cartItems[product.id] || 0,
                  isLiked : likedProducts.includes(product.id),
                  isAuthenticated: accessToken ? true : false }} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <ArrowButton link={`/categories/products/${activeTab.toLowerCase()}`} label="View All"/>
      </MaxWidthWrapper>
    </div>
  )
}

export default BestSellingProducts