import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Slider.css';
import { SliderProducts } from '../../Data/SliderData';
import { EffectCoverflow, Pagination } from 'swiper';

const Slider = () => {
  return (
    <>
      <h2 className='dTitle'>
        Destacados
      </h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='sContainer'
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide>
            <Card className='cardP'>
              <div className='sImgContainer'>
                <Card.Img variant='top'
                  src={slide.image} alt='producto' className='imgP' />
              </div>
              <Card.Body className='sCardContainer'>
                <span className='sCardContainer'>{slide.name}</span>
                <br />
                <span className='sCardContainer'>{slide.brand}</span>
                <Card.Text className='m-0 p-2'><b>{slide.price}</b></Card.Text>
                <Link className='cardsSBtn' to='/ProductPage'> Ver más </Link>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Slider;
