import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../index.css'
import { NavLink } from 'react-bootstrap';
import ReactPlayer from "react-player"

const CarruselHome = () => {
  return (
    <div id='home' className='carrusellll'>

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
    <NavLink href="https://wa.me/5493412842417" target='_blank' ><i class='bx bxl-whatsapp whatapp__fixed'></i></NavLink>
   
    </div>
  )
}

export default CarruselHome