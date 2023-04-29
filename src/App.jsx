import React from 'react'
//import "bootstrap/dist/css/bootstrap.min.css"
import CarruselHome from './components/CarruselHome'
import NavBar from './components/NavBar'
import './index.css'
import SectionCars from './components/SectionCars'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'

function App() {


  return (
    <>
    <div className='App'>
    <NavBar />
    {/* <div className='container__carrusel'> */}
    <CarruselHome />
    {/* </div> */}
    <SectionCars />
    <ContactForm />
    <hr />
    <Footer />
    

   
     
    </div>
    </>
    
  )
}

export default App
