import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from './Rating';
import SwiperArrow from '@assets/svg/swiper arrow.svg?react'
import SwiperInstance from "swiper";

import testimonials1 from "@assets/images/testimonials 1.png"
import testimonials2 from "@assets/images/testimonials 2.png"
import testimonials3 from "@assets/images/testimonials 3.png"
import testimonialsCover1 from "@assets/images/testimonials cover 1.png"
import testimonialsCover2 from "@assets/images/testimonials cover 2.png"
import testimonialsCover3 from "@assets/images/testimonials cover 3.png"

import 'swiper/css';
import { useRef } from 'react';

interface TTestimonials {
  name: string;
  job?: string;
  review?: string;
  avatar?: string;
  cover?: string;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
}

const testimonialsArray: TTestimonials[] = [
  {
    name: "Bang Upin",
    rating: 4,
    avatar: testimonials1,
    cover: testimonialsCover1,
    job: "Pedagang Asongan",
    review: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal"
  },
  {
    name: "Ibuk Sukijan",
    rating: 2,
    avatar: testimonials2, 
    cover: testimonialsCover2,
    job: "Ibu Rumah Tangga",
    review: "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah"
  },
  {
    name: "Mpok Ina",
    rating: 5,
    avatar: testimonials3,
    cover: testimonialsCover3,
    job: "Karyawan Swasta",
    review: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak"
  },
  {
    name: "Bang Upin",
    rating: 4,
    avatar: testimonials1,
    cover: testimonialsCover1,
    job: "Pedagang Asongan",
    review: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal"
  },
  {
    name: "Ibuk Sukijan",
    rating: 1,
    avatar: testimonials2, 
    cover: testimonialsCover2,
    job: "Ibu Rumah Tangga",
    review: "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah"
  },
  {
    name: "Mpok Ina",
    rating: 3,
    avatar: testimonials3,
    cover: testimonialsCover3,
    job: "Karyawan Swasta",
    review: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak"
  }
]

const Testimonials = () => {
  const swiperRef:React.RefObject<SwiperInstance | null> = useRef(null);

  return (
    <div className='py-10 md:py-20 lg:py-30 max-w-7xl mx-auto'>
      <div className='mb-10 md:mb-15 text-center p-4 sm:p-6'>
        <h2 className='text-primary text-base md:text-lg font-semibold mb-1 md:mb-3'>Testimonials</h2>
        <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>Our Client Reviews</h3>
      </div>
      <div className='relative mx-7 2xl:mx-0'>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1280: {slidesPerView: 3, spaceBetween: 40}
          }}
          navigation={{prevEl: '.swiper-arrow-prev', nextEl: '.swiper-arrow-next'}}
          centeredSlides={true}
          loop={true}
          onSlideChange={(swiper) => console.log(swiper)}
        >
          {testimonialsArray.map((el) => (
            <SwiperSlide>
              <div className='h-[476px] rounded-2xl relative overflow-hidden p-3 md:p-6 flex items-end'>
                <img src={el.cover} alt={`${el.name}'s cover`} width={370} height={476} className='absolute w-full h-full object-cover top-0 left-0 rounded-2xl' />
                <div className='rounded-xl bg-white relative w-full'>
                  <div className='rounded-full p-1 md:p-2 absolute transform top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-white'>
                    <img src={el.avatar} alt={`${el.name}'s avatar`} className='rounded-full size-12 shadow-lg'/>
                  </div>
                  <div className='mt-7 md:mt-8 p-2 md:p-4 text-center flex flex-col items-center gap-y-3 md:gap-y-5'>
                    <div>
                      <h3 className='font-bold text-bse md:text-lg'>{el.name}</h3>
                      <p className='text-xs md:text-sm opacity-80'>{el.job}</p>
                    </div>
                    <p className='text-sm max-w-full md:max-w-[85%]'>“{el.review}“</p>
                    <Rating rating={el.rating} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={() => swiperRef.current?.slideNext()} className='swiper-arrow-next p-3 rounded-full bg-white absolute right-0 translate-x-1/2 top-1/3 -translate-y-1/2 z-10 shadow-md'>
          <SwiperArrow className='rotate-180 rtl:rotate-0 h-[21px]' />
        </button>
        <button onClick={() => swiperRef.current?.slidePrev()} className='swiper-arrow-prev p-3 rounded-full bg-white absolute left-0 -translate-x-1/2 top-1/3 -translate-y-1/2 z-10 shadow-md'>
          <SwiperArrow className='rotate-0 rtl:rotate-180 h-[21px]' />
        </button>
      </div>
    </div>
  );
};

export default Testimonials