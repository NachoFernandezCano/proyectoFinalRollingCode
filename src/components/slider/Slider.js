import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import axios from 'config/axiosInit';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Slider.css';
import { EffectCoverflow, Pagination } from 'swiper';

const Slider = () => {

  const [sHotItem, setsHotItem] = useState([]);

  useEffect(() => {
    getSliderItem();
  }, []);

  const getSliderItem = async () => {
    try {
      const hotItem = await axios.get('/api/products/hotItem');
      setsHotItem(hotItem.data.hotItem)
    } catch (error) {
      if (error?.response?.data?.error === 'There is nothing here') {
        setsHotItem([]);
      } else {
        alert('Algo salio mal intente mas tarde');
      }
    }
  };
  return (
    <>
      <h2 className='dTitle'>
        Destacados
      </h2>
      <Swiper
        className='sContainer'
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
      >
        {
          (
            sHotItem?.length !== 0 ? (
              sHotItem?.map((product) => (
                <SwiperSlide key={product._id}>
                  <Card className='cardP'>
                    <div className='sImgContainer'>
                      <Card.Img variant='top'
                        src={product.image.img1} alt='producto' className='imgP' />
                    </div>
                    <Card.Body className='sCardContainer'>
                      <span className='sCardContainer'>{product.name}</span>
                      <br />
                      <span className='sCardContainer'>{product.brand}</span>
                      <Card.Text className='m-0 pb-2 fw-bold'>${product.price}</Card.Text>
                      <Link to='/Error404' className='cardsSBtn justify-content-center'> Ver más </Link>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))
            ) : (
              <>no hay productos para tu busqueda</>
            )
          )
        }
      </Swiper>
    </>
  )
}

export default Slider;
