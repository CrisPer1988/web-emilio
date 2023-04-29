import React, { useState } from 'react'
import '../index.css'
import { NavLink } from 'react-bootstrap';

const SectionCars = () => {
    const [modalFinanciacion, setModalFinanciacion] = useState(false)

    
    
    const handleModal = () => {
        setModalFinanciacion(!modalFinanciacion)
    }

    const cars = [
        {
            id: 1,
            img: "/images/banner_66.png",
            description: "Nuevo C3",
            fichaTecnica: "/images/2302_FT_C3_LOOK.pdf"
        },
        {
            id: 2,
            img: "/images/banner_33-removebg-preview.png",
            description: "Multi-space",
            fichaTecnica: "/images/2302_FT_C3_LOOK.pdf"
        },
        {
            id: 3,
            img: "/images/banner_34-removebg-preview.png",
            description: "multi-space 2",
            fichaTecnica: "/images/2302_FT_C3_LOOK.pdf"
        },
        {
            id: 5,
            img: "/images/c4-removebg-preview.png",
            description: "Nuevo C4",
            fichaTecnica: "/images/2302_FT_C3_LOOK.pdf"
        },
        {
            id: 6,
            img: "/images/c4cactus-removebg-preview.png",
            description: "C4 Cactus",
            fichaTecnica: "/images/2302_FT_C3_LOOK.pdf"
        }
    ]

    // const cars = [
    //     {
    //         id: 1,
    //         img: "/images/banner_24.png",
    //         description: "Nuevo C3",
    //         fichaTecnica: "/images/2302_FT_C3_LOOK.pdf"
    //     },
    //     {
    //         id: 2,
    //         img: "/images/banner_33.jpg",
    //         description: "Multi-space",
    //         fichaTecnica: "/images/2302_FT_C3_LOOK.pdf"
    //     },
    //     {
    //         id: 3,
    //         img: "/images/c4cactus.jpg",
    //         description: "multi-space 2",
    //         fichaTecnica: "/images/2302_FT_C3_LOOK.pdf"
    //     },
    // ]

  return (
    <div className='content__cars'>
        <h1>Autos disponibles</h1>
    
    <div className='container__cars'>

        {
            modalFinanciacion ?
       
            <div className='container__modal'>
        <div className='modal__financiacion'>
            <h2>Hasta 84 cuotas</h2>
            <button className='btn btn-success'><NavLink href="https://wa.me/5493412842417" target='_blank' >ME INTERESA</NavLink></button>
            
            <button onClick={handleModal} className='btn btn-danger'>Salir</button>
        </div>
       
        <div className='modal__financiacion'>
            <h2>Hasta 120 cuotas</h2>
            <button className='btn btn-success'><NavLink href="https://wa.me/5493412842417" target='_blank' >ME INTERESA</NavLink></button>
            <button onClick={handleModal} className='btn btn-danger'>Salir</button>
            </div>
        </div> 
        : ""    
        }
       
        {
            cars.map(car => (
                <div key={car.id}>
                    <h3>{car.description}</h3>
                    <div className='content__img-section'>
                    <img className='img__section' src={car.img} alt="" />
                    </div>
                    <div className='content__btn-section'>
                    <button className='btn btn-danger '><NavLink href={car.fichaTecnica} target='_blank'>Ficha Tecnica</NavLink></button>
                    <button onClick={handleModal} className='btn btn-danger'>Financiacion</button>
                    </div>
                    
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default SectionCars