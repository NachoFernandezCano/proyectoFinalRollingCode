import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Slider.css';
import { SliderProducts } from '../../data/SliderData';
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
        className='mySwiper'
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide>
            <Card className='cardP'>
              <div className='sImgContainer'>
                <Card.Img variant='top'
                  src={slide.image} alt='producto' className='imgP' />
              </div>
              <Card.Body className='sCardContainer'>
                <span className='sCardContainer'>blabla blab bla bla bblbalablablab</span>
                <span className='sCardContainer'>blablablablablablablablabal bla bla</span>
                <Card.Text className='m-0 p-2'><b>$9999999</b></Card.Text>
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
