import React from 'react'
import '../index.css'

const Footer = () => {
  return (
    <footer className='footer__page'>
        <div>
            <h3>Mis redes</h3>
        <div className='content__item-footer'>
            <i class='bx bxl-facebook icons'></i>
           <a href="https://wa.me/5493412842417" target='_blank'><i class='bx bxl-whatsapp icons'></i></a> 
        </div>
        </div>
        <hr className='line__vertical'/>
        <div>
            <h3>Emilio Reynoso</h3>
        <div className='content__item-footer'>
            <i class='bx bx-user icons'><span className='text__name'>Asesor Oficial Citroen</span></i>
               
        </div>
        </div>
    </footer>
  )
}

export default Footer