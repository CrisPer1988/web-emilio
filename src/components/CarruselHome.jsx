import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../index.css'

const CarruselHome = () => {
  return (
    <div className='carrusellll'>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 img__home"
          src="/images/c3.png"
          alt="Third slide"
        />
      </Carousel.Item> 
      <Carousel.Item >
        <img
          className="d-block w-100  img__home"
          src="/images/c4.png"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    <i class='bx bxl-whatsapp whatapp__fixed'></i>
    
    </div>
  )
}

export default CarruselHome