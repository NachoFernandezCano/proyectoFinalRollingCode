import React from 'react'
import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css"
import "swiper/css/navigation"
import "./Slider.css"
import { SliderProducts} from "../../Data/SliderData";

const Slider = () => {
  return (
    <div className='s-container'>
      <Swiper modules={[Navigation]} className="mySwiper"
      navigation={true}
      loopFillGroupWithBlank={true}
      slidesPerView={2} spaceBetween={40}
      slidesPerGroup={1} loop={true}>
        {SliderProducts.map((slide,i)=>(
      <SwiperSlide>
        <img src={slide.image} alt="product" className='img-p' ></img>
      </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider;